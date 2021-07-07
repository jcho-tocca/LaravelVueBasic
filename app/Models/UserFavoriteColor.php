<?php

namespace App\Models;

use App\Models\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class UserFavoriteColor extends Model
{
    use HasFactory;

    protected $guarded = [];

    /**
     * 色マスター
     */
    public function color()
    {
        return $this->belongsTo(MtbColor::class, 'mtb_color_id');
    }

    /**
     * ユーザー
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
