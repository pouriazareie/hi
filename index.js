<script>
    window.onload = function () {
        var url = new URL(window.location.href);
        var script = url.searchParams.get("script");
        console.log(script);
        eval(script)
    }    
</script>
