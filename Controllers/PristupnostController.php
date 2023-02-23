<?php
class PristupnostController extends Controller
{
    function process($params)
    {
        // Header of page (title)
        $this->header["title"] = "Přístupnost";

        // Setup layout
        $this->view = "pristupnost";
    }
}