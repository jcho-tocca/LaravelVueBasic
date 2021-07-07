<?php

namespace App\Models;

use App\Models\UserFavoriteColor;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class MtbColor extends Model
{
    use HasFactory;

    protected $guarded = [];

    /**
     * 好きな色
     */
    public function userFavoriteColors()
    {
        return $this->hasMany(UserFavoriteColor::class);
    }
}
