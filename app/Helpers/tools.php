<?php
if (! function_exists('base64_encode_image')) {

    /**
     * 画像ファイルをbase64にエンコードする
     */
    function base64_encode_image($file_path)
    {
        return 'data:image/png;base64,'.base64_encode(file_get_contents(storage_path('app/'.$file_path)));
    }
}
