<?php

namespace App\Services\Admin;

use App\Models\User;
use App\Models\MtbColor;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;
use PhpParser\Node\Stmt\TryCatch;

class UserService {

    // ユーザー取得
    public function getUser($user)
    {
        $user = User::with(['userFavoriteColors.color'])->find($user->id);

        if(!empty($user->file_path)) {
            $user->file_path = base64_encode_image($user->file_path);
        } else {
            $user->file_path = base64_encode_image('public\noimage.png');
        }

        $tempColors = [];

        foreach ($user->userFavoriteColors as $favriteColors) {
            $tempColors[] = $favriteColors->mtb_color_id;
        }

        $user->favorite_colors = $tempColors;

        $colors = MtbColor::all();
        return response()->json(compact('user', 'colors'));
    }

    // 新規登録
    public function create($request)
    {
        return response()->json([
            'error' => '登録に失敗しました'
        ], Response::HTTP_EXPECTATION_FAILED);

        DB::beginTransaction();

        try {

            $data = request()->only(['name', 'gender', 'email', 'role']);
            $data['password'] = Hash::make($request->password);

            $user = User::create($data);

            // 好きな色
            if(request()->filled('favorite_colors')) {
                foreach ($request->favorite_colors as $mtb_color_id) {
                    $user->userFavoriteColors()->create([
                        'mtb_color_id' => $mtb_color_id
                    ]);
                }
            }

            // ファイル処理
            if (request()->hasFile('file') && request()->file('file')->isValid()) {

                $directoryPath = 'users/avatar/' . $user->id;

                Storage::deleteDirectory($directoryPath);

                $file_path = request('file')->store($directoryPath);

                $user->update(compact('file_path'));
            }

            DB::commit();

            return response()->json(['message' => '登録に成功しました']);

        } catch (\Exception $e) {

            DB::rollback();
            Log::error($e->getMessage());

            return response()->json([
                'error' => '登録に失敗しました'
            ], Response::HTTP_EXPECTATION_FAILED);
        }
    }

    // 更新
    public function update($request, $user)
    {
        DB::beginTransaction();

        try {

            $data = request()->only(['name', 'gender', 'email', 'role']);
            if(request()->filled('password')) $data['password'] = Hash::make($request->password);

            $user->update($data);

            // 好きな色
            if(request()->filled('favorite_colors')) {
                $favoriteColors = collect(request('favorite_colors'));

                // 削除処理
                $user->userFavoriteColors()->whereNotIn('mtb_color_id', $favoriteColors)->delete();

                // 残っているユーザID取得
                $oldFavoriteColors = $user->userFavoriteColors->map(function ($userFavoriteColor) {
                    return $userFavoriteColor->mtb_color_id;
                });

                // 差分取得
                $insertFavoriteColors = $favoriteColors->diff(collect($oldFavoriteColors));

                // 差分登録
                $insertFavoriteColors->each(function ($mtb_color_id) use ($user) {
                    $user->userFavoriteColors()->create([
                        'mtb_color_id' => $mtb_color_id
                    ]);
                });
            }

            // ファイル処理
            if (request()->hasFile('file') && request()->file('file')->isValid()) {

                $directoryPath = 'users/avatar/' . $user->id;

                Storage::deleteDirectory($directoryPath);

                $file_path = request('file')->store($directoryPath);

                $user->update(compact('file_path'));
            }

            DB::commit();

            return response()->json(['message' => '登録に成功しました']);

        } catch (\Exception $e) {

            DB::rollback();
            Log::error($e->getMessage());

            return response()->json([
                'error' => '登録に失敗しました'
            ], Response::HTTP_EXPECTATION_FAILED);
        }
    }

    // 画像ファイルダウンロード
    public function fileDownLoad($user)
    {
        if(!empty($user->file_path)) {

            try{
                ob_end_clean();
                ob_start();

                $filePath = Storage::path($user->file_path);
                return response()->download($filePath);

            } catch (\Exception $e) {
                Log::error($e->getMessage());

                return response()->json([
                    'error' => 'ダウンロードできませんでした'
                ], Response::HTTP_EXPECTATION_FAILED);
            }
        } else {
            return response()->json([
                'error' => 'ファイルがありません'
            ], Response::HTTP_EXPECTATION_FAILED);
        }

    }
}
