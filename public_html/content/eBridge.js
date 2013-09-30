/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
var storage = window.localStorage;

//window.onload = checkStudentName();

function login()
{
    if (storage.getItem("00") === document.getElementById("studentName").value)
    {
        //Load next page
        window.location.href = "content/main.html";
    }
    else
    {
        $.mobile.changePage('#dialog', 'pop', true, true);
    }

    //alert(storage.getItem("00") + " stored.");
}

function createUser()
{
    storage.clear();
    storage.setItem("00", document.getElementById("studentName").value);
}

function checkStudentName()
{
    if (storage.getItem("00") !== "")
    {
        document.getElementById("studentName").value = storage.getItem("00");
    }
}