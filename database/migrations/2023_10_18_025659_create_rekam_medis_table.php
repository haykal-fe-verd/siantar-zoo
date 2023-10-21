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
        Schema::create('tb_rekam_medis', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('satwa_id');
            $table->unsignedBigInteger('obat_id');
            $table->integer('jumlah_obat');
            $table->date('tanggal_rekam_medis');
            $table->string('kondisi_umum');
            $table->text('diagnosa');
            $table->text('hasil');
            $table->date('pemeriksaan_selanjutnya')->nullable();
            $table->text('tindak_lanjut')->nullable();
            $table->text('note')->nullable();

            $table->foreign('satwa_id')->references('id')->on('tb_satwa')->onUpdate('cascade')->onDelete('cascade');
            $table->foreign('obat_id')->references('id')->on('tb_obat')->onUpdate('cascade')->onDelete('cascade');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tb_rekam_medis');
    }
};
