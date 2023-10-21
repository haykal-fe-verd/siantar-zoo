<?php

namespace App\Http\Middleware;

use App\Models\JenisSatwa;
use App\Models\KategoriSatwa;
use Illuminate\Http\Request;
use Inertia\Middleware;
use Tightenco\Ziggy\Ziggy;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): string|null
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        return [
            ...parent::share($request),
            'auth' => [
                'user' => $request->user(),
            ],
            'sessions' => [
                'message' => session('message'),
                'success' => session('success'),
                'error' => session('error'),
                'status' => session('status'),
            ],
            'kategoriSatwa' => KategoriSatwa::all(),
            'jenisSatwa' => JenisSatwa::all(),
            'ziggy' => fn () => [
                ...(new Ziggy)->toArray(),
                'location' => $request->url(),
            ],
        ];
    }
}
