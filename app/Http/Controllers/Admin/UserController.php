<?php

namespace App\Http\Controllers\Admin;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Http\Requests\UserPost;
use App\Services\Admin\UserService;
use App\Http\Controllers\Controller;
use App\Models\MtbColor;

class UserController extends Controller
{
    private $service;

    public function __construct(UserService $service)
    {
        $this->service = $service;
    }

    /**
     * 一覧
     */
    public function index()
    {
        return User::latest()->paginate(5);
    }

    /**
     * 新規登録
     */
    public function store(UserPost $request)
    {
        return $this->service->create($request);
    }

    /**
     * 詳細
     */
    public function show(User $user)
    {
        return $this->service->getUser($user);
    }

    /**
     * 編集
     */
    public function update(UserPost $request, User $user)
    {
        return $this->service->update($request, $user);
    }

    /**
     * 削除
     */
    public function destroy(User $user)
    {
        $user->delete();
        return response()->json(['message' => '削除に成功しました']);
    }

    // 画像ファイルダウンロード
    public function fileDownLoad(User $user)
    {
        return $this->service->fileDownLoad($user);
    }
}
