<?php

namespace App\Http\Controllers;

use App\Models\Satwa;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Facades\Storage;


class SatwaController extends Controller
{

    public function index(Request $request): Response
    {
        $query = Satwa::with(['jenis_satwa', 'kategori_satwa', 'rekam_medis'])->latest();

        if ($request->has('search')) {
            $search = $request->search;
            $query->where(function ($query) use ($search) {
                $query->where('nama', 'LIKE', "%$search%")
                    ->orWhere('jenis_kelamin', 'LIKE', "%$search%")
                    ->orWhere('tanggal_lahir', 'LIKE', "%$search%")
                    ->orWhere('bangsa', 'LIKE', "%$search%")
                    ->orWhere(function ($subquery) use ($search) {
                        $subquery->whereHas('jenis_satwa', function ($query) use ($search) {
                            $query->where('nama_jenis_satwa', 'LIKE', '%' . $search . '%');
                        })->orWhereHas('kategori_satwa', function ($query) use ($search) {
                            $query->where('nama_kategori_satwa', 'LIKE', '%' . $search . '%');
                        });
                    });
            });
        }

        $satwa = $query->paginate($request->perpage ?? 10)->withQueryString();

        return Inertia::render('satwa/index', compact('satwa'));
    }

    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            'jenis_satwa_id' => 'required',
            'kategori_satwa_id' => 'required',
            'nama' => 'required',
            'jenis_kelamin' => 'required',
            'ras' => 'required',
            'berat' => 'required',
            'tanggal_lahir' => 'required',
            'bangsa' => 'required',
            'habitat' => 'required',
            'makanan_favorit' => 'required',
            'ciri_khas' => 'required',
        ]);

        $satwa = new Satwa();

        if ($request->hasFile('foto')) {
            $path = $request->file('foto')->store('foto-satwa', 'public');
            $satwa->foto = $path;
        }

        $satwa->jenis_satwa_id = $request->input('jenis_satwa_id');
        $satwa->kategori_satwa_id = $request->input('kategori_satwa_id');
        $satwa->nama = $request->input('nama');
        $satwa->jenis_kelamin = $request->input('jenis_kelamin');
        $satwa->ras = $request->input('ras');
        $satwa->berat = $request->input('berat');
        $satwa->tanggal_lahir = $request->input('tanggal_lahir');
        $satwa->bangsa = $request->input('bangsa');
        $satwa->habitat = $request->input('habitat');
        $satwa->makanan_favorit = $request->input('makanan_favorit');
        $satwa->ciri_khas = $request->input('ciri_khas');
        $satwa->save();

        return redirect()->route('satwa.index')->with('success', 'Satwa berhasil ditambahkan');
    }

    public function update(Request $request, string $id): RedirectResponse
    {
        $request->validate([
            'jenis_satwa_id' => 'required',
            'kategori_satwa_id' => 'required',
            'nama' => 'required',
            'jenis_kelamin' => 'required',
            'ras' => 'required',
            'berat' => 'required',
            'tanggal_lahir' => 'required',
            'bangsa' => 'required',
            'habitat' => 'required',
            'makanan_favorit' => 'required',
            'ciri_khas' => 'required',
        ]);

        $satwa = Satwa::findOrFail($id);

        if ($request->hasFile('foto')) {
            $request->validate(([
                'foto' => 'nullable|image|mimes:jpeg,png,jpg|max:2048',
            ]));

            $oldPath = $satwa->foto;
            if ($oldPath) {
                Storage::disk('public')->delete($oldPath);
            }

            $path = $request->file('foto')->store('foto-satwa', 'public');
            $satwa->foto = $path;
        }

        $satwa->jenis_satwa_id = $request->input('jenis_satwa_id');
        $satwa->kategori_satwa_id = $request->input('kategori_satwa_id');
        $satwa->nama = $request->input('nama');
        $satwa->jenis_kelamin = $request->input('jenis_kelamin');
        $satwa->ras = $request->input('ras');
        $satwa->berat = $request->input('berat');
        $satwa->tanggal_lahir = $request->input('tanggal_lahir');
        $satwa->bangsa = $request->input('bangsa');
        $satwa->habitat = $request->input('habitat');
        $satwa->makanan_favorit = $request->input('makanan_favorit');
        $satwa->ciri_khas = $request->input('ciri_khas');
        $satwa->save();

        return redirect()->route('satwa.index')->with('success', 'Satwa berhasil diedit');
    }

    public function destroy(string $id): RedirectResponse
    {
        $satwa = Satwa::findOrFail($id);

        $fotoPath = $satwa->foto;
        if ($fotoPath) {
            Storage::disk('public')->delete($fotoPath);
        }

        $satwa->delete();

        return redirect()->route('satwa.index')->with('success', 'Satwa berhasil dihapus');
    }
}
