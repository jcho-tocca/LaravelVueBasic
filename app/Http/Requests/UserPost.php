<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UserPost extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $rules = [
            'name' => ['required'],
            'gender' => ['required'],
            'email' => ['required', 'email', 'unique:users'],
            'role' => ['required'],
            'favorite_colors' => ['required'],
            'file' => ['required', 'file', 'image'],
            'password' => ['required', 'min:8', 'confirmed'],
        ];

        // dd($this->user);
        // 編集時
        if (request()->isMethod('put')) {
            // 自分以外のユニークキー検証
            $rules['email'] =  ['required', 'unique:users,email,'.$this->user->id];
            $rules['file'] =  ['file', 'image'];
            $rules['password'] =  ['min:8', 'confirmed'];
        }

        return $rules;
    }

    /**
     * バリデーションエラーのカスタム属性の取得
     *
     * @return array
     */
    public function attributes()
    {
        return [
            'name' => 'お名前',
            'gender' => '性別',
            'email' => 'メールアドレス',
            'role' => '権限',
            'favorite_colors' => '好きな色',
            'file' => '画像ファイル',
            'password' => 'パスワード',
        ];
    }
}
