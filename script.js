(function ($) {
    $(document).ready(function () {
        $('#cssmenu > ul > li > a').click(function () {
            $('#cssmenu li').removeClass('active');
            $(this).closest('li').addClass('active');
            var checkElement = $(this).next();
            if (checkElement.is('ul') && checkElement.is(':visible')) {
                $(this).closest('li').removeClass('active');
                checkElement.slideUp('normal');
            }
            if (checkElement.is('ul') && !checkElement.is(':visible')) {
                $('#cssmenu ul ul:visible').slideUp('normal');
                checkElement.slideDown('normal');
            }
            if ($(this).closest('li').find('ul').children().length === 0) {
                return true;
            } else {
                return false;
            }
        });
    });
})(jQuery);


function changeImageText(el) {
    var i = el.src.search("Text");
    if (i === -1)
    {
        //el.src = 'images/misgeret/shiryonText.jpg';
        el.src = el.src.replace(".jpg", "Text.jpg");
        el.style = "border:1px solid black; width: 250px";
    }
    else {
        //el.src = 'images/misgeret/shiryon.jpg';
        el.src = el.src.replace("Text.jpg", ".jpg");
        el.style = "width: 250px";
    }
}

function corpSelection(el) {
    document.getElementById("cShiryon").src = document.getElementById("cShiryon").src.replace("Color.png", ".png");
    document.getElementById("cIsuf").src = document.getElementById("cIsuf").src.replace("Color.png", ".png");
    document.getElementById("cHandasa").src = document.getElementById("cHandasa").src.replace("Color.png", ".png");
    document.getElementById("cHatam").src = document.getElementById("cHatam").src.replace("Color.png", ".png");
    document.getElementById("cHir").src = document.getElementById("cHir").src.replace("Color.png", ".png");
    document.getElementById("cLogistics").src = document.getElementById("cLogistics").src.replace("Color.png", ".png");

    el.src = el.src.replace(".png", "Color.png");

    document.getElementById("selectCorp").title = el.alt;
}

function selectCorpBtn() {

    var corpTitle = document.getElementById("selectCorp").title;
    if (corpTitle === "") {
        window.alert("יש לבחור חיל");
    }
    else {  
        window.parent.document.getElementById("corpLI").innerHTML = document.getElementById("selectCorp").title;
        window.parent.document.getElementById("corpLI").style = "list-style-image: url(images/smallChecked.png);";
    }
}

function misgeretSelection(el) {
    document.getElementById("cHativa").src = document.getElementById("cHativa").src.replace("Color.png", ".png");
    document.getElementById("cGdud").src = document.getElementById("cGdud").src.replace("Color.png", ".png");
    document.getElementById("cPluga").src = document.getElementById("cPluga").src.replace("Color.png", ".png");

    el.src = el.src.replace(".png", "Color.png");

    document.getElementById("selectMisgeret").title = el.alt;
}

function selectMisgeretBtn() {

    if (document.getElementById("selectMisgeret").title === "") {
        window.alert("יש לבחור מסגרת");
    }
    else {
        window.parent.document.getElementById("misgeretLI").innerHTML = document.getElementById("selectMisgeret").title;
        window.parent.document.getElementById("misgeretLI").style = "list-style-image: url(images/smallChecked.png);";
        //document.getElementById("selectCorp").title = "clicked";
    }
}

function locationSelection(el) {
    document.getElementById("cA").src = document.getElementById("cA").src.replace("Text.png", ".png");
    document.getElementById("cB").src = document.getElementById("cB").src.replace("Text.png", ".png");
    document.getElementById("cMala").src = document.getElementById("cMala").src.replace("Text.png", ".png");

    el.src = el.src.replace(".png", "Text.png");

    document.getElementById("selectLocation").title = el.alt;
}

function selectLocationBtn() {

    if (document.getElementById("selectLocation").title === "") {
        window.alert("יש לבחור מתקן");
    }
    else {
        window.parent.document.getElementById("locationLI").innerHTML = document.getElementById("selectLocation").title;
        window.parent.document.getElementById("locationLI").style = "list-style-image: url(images/smallChecked.png);";
        //document.getElementById("selectCorp").title = "clicked";
    }
}

function selectTechBtn() {

    window.parent.document.getElementById("typeLI").innerHTML = "";
    for (var i = 1; i < 4; i++) {
        if (document.getElementById("cb1"+i).checked) {
            window.parent.document.getElementById("typeLI").innerHTML = window.parent.document.getElementById("typeLI").innerHTML +
                document.getElementById("cb1" + i).title + ";  ";
        }
    }
    window.parent.document.getElementById("typeLI").style = "list-style-image: url(images/smallChecked.png);";

    window.parent.document.getElementById("techLI").innerHTML = "";
    for (var j= 1; j < 5; j++) {
        if (document.getElementById("cb2" + j).checked) {
            window.parent.document.getElementById("techLI").innerHTML = window.parent.document.getElementById("techLI").innerHTML +
                document.getElementById("cb2" + j).title + ";  ";
        }
    }
    window.parent.document.getElementById("techLI").style = "list-style-image: url(images/smallChecked.png);";

    window.parent.document.getElementById("methodLI").innerHTML = "";
    for (var k = 1; k < 6; k++) {
        if (document.getElementById("cb3" + k).checked) {
            window.parent.document.getElementById("methodLI").innerHTML = window.parent.document.getElementById("methodLI").innerHTML +
                document.getElementById("cb3" + k).title + ";  ";
        }
    }
    window.parent.document.getElementById("methodLI").style = "list-style-image: url(images/smallChecked.png);";
}

function openRightMenu() {
    document.getElementById("rightMenu").style.display = "block";
}
function closeRightMenu() {
    document.getElementById("rightMenu").style.display = "none";
}