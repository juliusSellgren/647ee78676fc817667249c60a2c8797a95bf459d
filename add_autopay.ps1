# Mapping: Autopay CSV name -> location name(s) in script.js
$mapping = @{
  "Allégaraget"               = @("Allégaraget")
  "Angered"                   = @("Angered Centrum")
  "Arenagaraget"              = @("Arenagaraget")
  "Arwidsro Bonden 11"        = @("Bonden 11")
  "Asecs"                     = @("ASECS")
  "Atrium Ljungberg Liljeholmen" = @("Liljeholmstorget Galleria")
  "BAS Barkaby"               = @("BAS Barkarby")
  "Bauhaus Bromma"            = @("Bauhaus Bromma")
  "Bauhaus Sickla"            = @("Bauhaus Sickla")
  "Bauhaus Sisjön"            = @("Bauhaus Sisjön")
  "Bikupan"                   = @("Bikupan")
  "Citygaraget"               = @("Citygaraget")
  "Commerce"                  = @("Commerce")
  "Cylindergaraget"           = @("Cylindergaraget")
  "Dalénum"                   = @("Dalénum")
  "Entrégaraget"              = @("Entrégaraget")
  "Eriksbergs Handelsplats"   = @("Eriksbergs Handelsplats")
  "Frösundaviksparken"        = @("Frösundaviksparken")
  "Globen Shopping"           = @("Globen Shopping")
  "Grand Central"             = @("Grand Central")
  "Gränbystaden"              = @("Gränbystaden")
  "Hallonbergen Centrum"      = @("Hallonbergen Centrum")
  "Hangar 5"                  = @("Hangar 5")
  "Haninge Centrum"           = @("Haninge Centrum")
  "Herrjärva/Sadelplatsen 2"  = @("Herrjärva", "Sadelplatsen 2")
  "Hotell Aiden"              = @("Aiden By Best Western")
  "Huvudsta Centrum"          = @("Huvudsta Centrum")
  "ICA Maxi Barkarby"         = @("ICA Maxi Barkarby")
  "Jakobsbergs Centrum"       = @("Riddarplatsen, Jakobsberg")
  "Kattvikskajen"             = @("Kattvikskajen")
  "Kista Galleria"            = @("Kista Galleria")
  "Kista Science Tower"       = @("Kista Science Tower")
  "Kongahälla"                = @("Kongahälla Center")
  "Lindhagen"                 = @("Maxi ICA Stormarknad Lindhagen")
  "Mobilia"                   = @("Mobilia Köpcentrum")
  "Märsta Centrum"            = @("Märsta Centrum")
  "Nacka Forum"               = @("Nacka Forum")
  "Nordstan"                  = @("Nordstan")
  "Odenplansgaraget"          = @("Odenplansgaraget")
  "Orminge Centrum"           = @("Orminge Centrum")
  "Patienten 1"               = @("Hemsö, Patienten 1")
  "P-hus Avenyn"              = @("P-hus Avenyn")
  "P-hus Dockan"              = @("Dockan")
  "P-hus Däcket"              = @("Däcket")
  "P-hus Högne"               = @("Högne")
  "P-hus Oxen"                = @("Oxen")
  "Port 73"                   = @("Port73")
  "Råsunda Södra"             = @("Klackengaraget, Råsunda Södra")
  "Sheraton"                  = @("Sheratongaraget")
  "Sickla Köpkvarter"         = @("Sickla Köpkvarter", "Sickla Köpkvarter - Atlas Copco", "Sickla Köpkvarter - Marcusplatsen", "Sickla Köpkvarter - Front II", "Sickla Köpkvarter - Magasinet")
  "Signalfabriken"            = @("Signalfabriken")
  "Sollentuna Centrum"        = @("Sollentuna Centrum")
  "Solna Centrum"             = @("Solna Centrum")
  "Stenungstorg Centrum"      = @("Stenungstorg Centrum")
  "Söder Gallerian"           = @("SöDER Gallerian")
  "Söderskansgaraget"         = @("Söderskansgaraget")
  "Technopolis"               = @("Technopolis")
  "Tumba Centrum"             = @("Tumba Centrum")
  "Tyresö Centrum"            = @("Tyresö Centrum")
  "Von Conow"                 = @("Von Conow")
  "Vällingby Centrum"         = @("Vällingby Centrum")
  "Väsby Centrum"             = @("Väsby Centrum")
  "Wallenstam Umami Park"     = @("Umami Park")
  "Westfield Mall of Scandinavia" = @("Westfield Mall of Scandinavia")
  "Westfield Täby Centrum"    = @("Westfield Täby Centrum")
  "Åkersberga Centrum"        = @("Åkersberga Centrum")
}

# Collect all script.js location names that should have autopay
$autopayLocations = [System.Collections.Generic.HashSet[string]]::new()
foreach ($targets in $mapping.Values) {
  foreach ($t in $targets) { $autopayLocations.Add($t) | Out-Null }
}

Write-Host "Locations to mark with autopay: $($autopayLocations.Count)"

# Read script.js
$content = Get-Content 'C:\Users\sellg\Desktop\Webpage\script.js' -Raw -Encoding UTF8

# For each location, find its apps: [...] line and add "autopay" if missing
foreach ($locName in $autopayLocations) {
  # Escape special regex chars in name
  $escaped = [regex]::Escape($locName)

  # Match: name: "LOCNAME", then (within ~500 chars) apps: [...]
  $pattern = "(?s)(name:\s*`"$escaped`".*?apps:\s*\[)([^\]]*?)(\])"
  $m = [regex]::Match($content, $pattern)

  if (-not $m.Success) {
    Write-Host "NOT FOUND: $locName"
    continue
  }

  $currentApps = $m.Groups[2].Value
  if ($currentApps -match '"autopay"') {
    Write-Host "SKIP (already has autopay): $locName"
    continue
  }

  # Build new apps content
  $newApps = if ($currentApps.Trim() -eq "") {
    '"autopay"'
  } else {
    $currentApps.TrimEnd() + ', "autopay"'
  }

  $newBlock = $m.Groups[1].Value + $newApps + $m.Groups[3].Value
  $content = $content.Substring(0, $m.Index) + $newBlock + $content.Substring($m.Index + $m.Length)
  Write-Host "UPDATED: $locName  →  [$newApps]"
}

Set-Content 'C:\Users\sellg\Desktop\Webpage\script.js' -Value $content -Encoding UTF8 -NoNewline
Write-Host "`nDone. script.js saved."
