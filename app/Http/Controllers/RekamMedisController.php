<?php

namespace App\Http\Controllers;

use App\Models\Obat;
use App\Models\RekamMedis;
use App\Models\Satwa;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;

class RekamMedisController extends Controller
{
    public function detail($id)
    {
        $satwa = Satwa::with(['jenis_satwa', 'kategori_satwa', 'rekam_medis.obat'])->findOrFail($id);

        return Inertia::render('satwa/rekam-medis-show', compact('satwa'));
    }

    public function show($id)
    {
        $satwa = Satwa::findOrFail($id);
        $obat = Obat::all();

        return Inertia::render('satwa/rekam-medis', compact('satwa', 'obat'));
    }


    public function store(Request $request)
    {
        $request->validate([
            'satwa_id' => "required",
            'obat_id' => "required",
            'jumlah_obat' => "required",
            'tanggal_rekam_medis' => "required",
            'kondisi_umum' => "required",
            'diagnosa' => "required",
            'hasil' => "required",
            'pemeriksaan_selanjutnya' => "required",
            'tindak_lanjut' => "required",
            'note' => "required",
        ]);

        $obat = Obat::findOrFail($request->obat_id);
        $obat->stok -= $request->jumlah_obat;
        $obat->save();

        $rekamMedis = new RekamMedis;
        $rekamMedis->satwa_id = $request->satwa_id;
        $rekamMedis->obat_id = $request->obat_id;
        $rekamMedis->jumlah_obat = $request->jumlah_obat;
        $rekamMedis->tanggal_rekam_medis = $request->tanggal_rekam_medis;
        $rekamMedis->kondisi_umum = $request->kondisi_umum;
        $rekamMedis->diagnosa = $request->diagnosa;
        $rekamMedis->hasil = $request->hasil;
        $rekamMedis->pemeriksaan_selanjutnya = $request->pemeriksaan_selanjutnya;
        $rekamMedis->tindak_lanjut = $request->tindak_lanjut;
        $rekamMedis->note = $request->note;
        $rekamMedis->save();

        return redirect()->route('satwa.index')->with('success', 'Rekam Medis berhasil ditambahkan');
    }
}
