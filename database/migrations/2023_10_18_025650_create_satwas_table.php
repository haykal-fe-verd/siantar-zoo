<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('tb_satwa', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('jenis_satwa_id');
            $table->unsignedBigInteger('kategori_satwa_id');
            $table->string('nama');
            $table->enum('jenis_kelamin', ['jantan', 'betina', 'hermafrodit']);
            $table->string('ras');
            $table->string('berat');
            $table->date('tanggal_lahir');
            $table->string('bangsa');
            $table->string('habitat');
            $table->string('makanan_favorit');
            $table->text('ciri_khas');
            $table->string('foto');

            $table->foreign('jenis_satwa_id')->references('id')->on('tb_jenis_satwa')->onUpdate('cascade')->onDelete('cascade');
            $table->foreign('kategori_satwa_id')->references('id')->on('tb_kategori_satwa')->onUpdate('cascade')->onDelete('cascade');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tb_satwa');
    }
};
