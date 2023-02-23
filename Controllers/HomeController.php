<?php
class HomeController extends Controller
{
    function process($params)
    {
        // Header of page (title)
        $this->header["title"] = "Domovská stránka";

        // Setup layout
        $this->view = "home";
    }
}
