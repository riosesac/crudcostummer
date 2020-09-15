<?php

namespace App\Http\Controllers\Custommer\Validasi;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class Validasi extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($data)
    {
        //
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
        $val = Validator::make($data, [
            'name' => 'required',
            'email' => 'required',
            'password' => 'required',
            'gender' => 'required',
            'status' => 'required',
            'address' => 'required',
        ], [
            'name.required' => 'silahkan input nama',
            'email.required' => 'silahkan input email',
            'password.required' => 'silahkan input password',
            'gender.required' => 'silahkan input jenis kelamin',
            'status.required' => 'silahkan input status pernikahan',
            'address.required' => 'silahkan input alamat',
        ]);
        return $val;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($data)
    {
        //
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
        $id['id'] = $data;
        $val = Validator::make($id, [
            'id' => 'required',
        ], [
            'id.required' => 'data user tidak ada',
        ]);
        return $val;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($data)
    {
        //
    }
}
