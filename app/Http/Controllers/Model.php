<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class Model extends Controller
{
    function __get($name)
    {
        $namespace = '\\App\\Model\\' . $name;
        $this->name = new $namespace;
        return $this->name;
    }
}
