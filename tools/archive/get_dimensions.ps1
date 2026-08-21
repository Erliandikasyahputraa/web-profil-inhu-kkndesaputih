Add-Type -AssemblyName System.Drawing

$files = Get-ChildItem -Path "public\images" -Recurse -File -Include *.jpg,*.jpeg,*.png,*.webp,*.svg,*.gif
$results = @()

foreach ($f in $files) {
    $width = 0
    $height = 0
    $unreadable = $false
    $orientation = "UNKNOWN"
    
    if ($f.Extension -eq ".svg") {
        $orientation = "square"
    } else {
        try {
            $img = [System.Drawing.Image]::FromFile($f.FullName)
            $width = $img.Width
            $height = $img.Height
            $img.Dispose()
            
            if ($width -gt $height) { $orientation = "landscape" }
            elseif ($height -gt $width) { $orientation = "portrait" }
            else { $orientation = "square" }
        } catch {
            $unreadable = $true
            $orientation = "UNREADABLE"
        }
    }
    
    $results += @{
        path = $f.FullName
        name = $f.Name
        width = $width
        height = $height
        orientation = $orientation
    }
}

$results | ConvertTo-Json -Depth 2 > dimensions.json
