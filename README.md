# About Custom Text Editor
Custom Text Editor (or CTE) is a simple tool that allow you to change the style of a text (font, style, colors, weight, size and the curves by using CircleType).

The goal is to apply the result in a canvas by using "html2canvas" . This step is optional and you can adjust it or remove it

## Important
This "Tool" use the same class name as Tailwind but Tailwind is not installed because... maybe you don't want to deal with Tailwind. So, be sure to remove those classname OR update your taiwind.css file

### Import JS and Icons
- Import the icon with `<link href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css" rel="stylesheet">`
- Import the style with : `<link rel="stylesheet" href="src/styles/custom-text-editor.css">`
- Import the JS with : `<script src="src/scripts/circletype.min.js"></script>`
- Import the JS with : `<script src="src/scripts/fittext.js"></script>`
- Import the JS with : `<script src="src/scripts/custom-text-editor.js"></script>`

You can add your own fonts in the folder `src/fonts`. 
Then import them in the file caled `custom-text-editor-font-family.css`

### Get the CUSTOM-TEXT-EDITOR
Place this code in your code

    <div id="cte">
        <div class="flex cte-separator p-2">
            <div><textarea class="p-2" onkeyup="cteUpdateText()">you text</textarea></div>
        </div>
        <div class="flex items-center cte-separator">
            <div class="px-2">
                <select name="choose-color" onchange="customTextEditor('color', this);">
                    <option value="000000" selected>Noir</option>
                    <option value="e28743">Brun</option>
                    <option value="76b5c5">Bleu</option>
                    <option value="154c79">Violet</option>
                </select>
            </div>
            <div class="cte-text-edit text-center grow py-4 cte-weight cte-weight--disabled" onclick="customTextEditor('font-weight', 'bold');" ><i class="ri-bold"></i></div>
            <div class="cte-text-edit text-center grow py-4 cte-style cte-style--disabled" onclick="customTextEditor('font-style', 'italic');"><i class="ri-italic"></i></div>
            <div class="cte-text-edit text-center grow py-4" onclick="customTextEditor('text-align', 'left');"><i class="ri-align-left"></i></div>
            <div class="cte-text-edit text-center grow py-4" onclick="customTextEditor('text-align', 'center');"><i class="ri-align-center"></i></div>
            <div class="cte-text-edit text-center grow py-4" onclick="customTextEditor('text-align', 'right');"><i class="ri-align-right"></i></div>
            <div class="cte-text-edit text-center grow py-4" onclick="customTextEditor('text-align', 'justify');"><i class="ri-align-justify"></i></div>
        </div>
        <div class="flex items-center cte-separator">
            <div class="px-2 grow">Taille de la police</div>
            <div class="cte-text-edit pl-2 pr-8 py-4">
                <input type="range" min="10" max="50" value="18" class="slider" onchange="customTextEditor('font-size', this)">
            </div>
        </div>
        <div class="flex items-center cte-separator">
            <div class="px-2 grow">
                <select class="cte-courbureType" onchange="customTextEditor('circleType', this);">
                    <option value="none" selected>Pas de courbure</option>
                    <option value="top">Courbé vers le haut</option>
                    <option value="bottom">Courbé vers le bas</option>
                </select>
            </div>
            <div class="cte-text-edit pl-2 pr-8 py-4">
                <input type="range" min="0" max="360" value="180" class="cte-courbureSlide" onchange="customTextEditor('courbure', this)" disabled>
            </div>
        </div>
    
        <div class="flex p-2">
            <span onclick="cteReset()" class="cte-reset">Réinitialiser</span>
        </div>
    
    </div>  

    <div id="cte-result"></div>
