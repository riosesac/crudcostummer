<?php

namespace App\Http\Controllers\Custommer\Output;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class Output extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($data)
    {
        if (!$data) {
            return response()->json([
                'status' => [
                    'code' => 406,
                    'response' => 'Gagal',
                    'message' => 'data tidak ada'
                ],
                'result' => 'kosong'
            ], 406);
        }
        return response()->json([
            'status' => [
                'code' => 200,
                'response' => 'sukses',
                'message' => 'data ada'
            ],
            'result' => collect($data)->map(function ($value) {
                return [
                    'id' => $value->id,
                    'nama' => $value->nama,
                    'email' => $value->email,
                    'jeniskelamin' => $value->gender,
                    'perkawinan' => $value->status,
                    'alamat' => $value->address,
                ];
            })
        ], 200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create($data)
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store($data)
    {
        if (!$data) {
            return response()->json([
                'status' => [
                    'code' => 406,
                    'response' => 'Gagal',
                    'message' => 'data tidak tercreate'
                ],
                'result' => 'kosong'
            ], 406);
        }
        return response()->json([
            'status' => [
                'code' => 200,
                'response' => 'sukses',
                'message' => 'data tercreate'
            ],
            'result' => [
                'nama' => $data->nama,
                'email' => $data->email,
                'jeniskelamin' => $data->gender,
                'perkawinan' => $data->status,
                'alamat' => $data->address,
            ]
        ], 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($data)
    {
        if (!$data) {
            return response()->json([
                'status' => [
                    'code' => 406,
                    'response' => 'Gagal',
                    'message' => 'data kosong'
                ],
                'result' => 'kosong'
            ], 406);
        }
        return response()->json([
            'status' => [
                'code' => 200,
                'response' => 'sukses',
                'message' => 'data ada'
            ],
            'result' => [
                'id' => $data->id,
                'nama' => $data->nama,
                'email' => $data->email,
                'jeniskelamin' => $data->gender,
                'perkawinan' => $data->status,
                'alamat' => $data->address,
            ]
        ], 200);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($data)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update($data)
    {
        if (!$data) {
            return response()->json([
                'status' => [
                    'code' => 406,
                    'response' => 'Gagal',
                    'message' => 'data tidak terupdate'
                ],
                'result' => 'kosong'
            ], 406);
        }
        return response()->json([
            'status' => [
                'code' => 200,
                'response' => 'sukses',
                'message' => 'data terupdate'
            ],
            'result' => [
                'nama' => $data->nama,
                'email' => $data->email,
                'jeniskelamin' => $data->gender,
                'perkawinan' => $data->status,
                'alamat' => $data->address,
            ]
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($data)
    {
        if ($data == false) {
            return response()->json([
                'status' => [
                    'code' => 406,
                    'response' => 'Gagal',
                    'message' => 'data tidak ada'
                ],
                'result' => 'kosong'
            ], 406);
        }
        return response()->json([
            'status' => [
                'code' => 200,
                'response' => 'sukses',
                'message' => 'data terhapus'
            ],
            'result' => 'kosong'
        ], 200);
    }
}
