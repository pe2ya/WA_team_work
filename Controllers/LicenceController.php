<?php
class LicenceController extends Controller
{
    function process($params)
    {
        // Header of page (title)
        $this->header["title"] = "Licence";
        
        // Setup layout
        $this->view = "licence";
    }
}
