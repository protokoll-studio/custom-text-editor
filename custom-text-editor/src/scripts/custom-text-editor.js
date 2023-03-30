cteUpdateText();

function customTextEditor(attr, value) {
    if (attr == 'color') {
        $('#cte-result').css(attr, '#' + $(value).val());
    } 
    if (attr == 'font-weight') {
        $('.cte-weight').toggleClass('cte-weight--disabled');
        if ($('.cte-weight').hasClass('cte-weight--disabled')) {
            value = 'normal';
        }
    }
    if (attr == 'font-style') {
        $('.cte-style').toggleClass('cte-style--disabled');
        if ($('.cte-style').hasClass('cte-style--disabled')) {
            value = 'normal';
        }        
    }

    if (attr == 'font-family') {
        var fontName = $('#cte .cte-font option:selected').attr('value');
        $('#cte-result').css('font-family', '"' + fontName + '"', 'important');
    }

    if (attr == 'font-size') {
        $('#cte-result').css(attr, $(value).val() + 'px');
    } else {
        $('#cte-result').css(attr, value);
    }

    // Circle type
    if ($('.cte-courbureType option:selected').val() != 'none') {
        $('.cte-courbureSlide').prop('disabled', false);
    } else if (attr != 'courbure' && $('.cte-courbureType option:selected').val() == 'none') {
        $('.cte-courbureSlide').prop('disabled', true);
        cteUpdateText();
    } 
    
    if (attr == 'courbure' && $('.cte-courbureType option:selected').val() != 'none') {
        var dir = -1;
        if ($('.cte-courbureType option:selected').val() == 'top') {
            dir = 1;
        }
        var cteResult = new CircleType(document.getElementById('cte-result'))
        .dir(dir).radius($(value).val());
        // $(cteResult.element).fitText(1, { minFontSize: '10px', maxFontSize: '50px' });    
    }
}

/**
 * Update the text in the result
 */
function cteUpdateText() {
    $('#cte-result').html($('#cte textarea').val());
    cteRefresh();
}

/**
 * Reset the settings
 */
function cteReset() {
    $('#cte-result').css('font-weight', 'normal');
    $('#cte-result').css('color', 'inherit');
    $('#cte-result').css('font-style', 'normal');
    $('#cte-result').css('text-align', 'left');
    $('#cte-result').css('font-size', 'inherit');
    $('#cte-result').html($('#cte textarea').val());
}

/**
 * Transform the div into a canvas
 */
function cteRefresh() {
    html2canvas(document.querySelector("#cte-result")).then(canvas => {
        $('#ctetxt2image').remove();
        canvas.id = 'ctetxt2image',
        document.body.appendChild(canvas)
    });
}