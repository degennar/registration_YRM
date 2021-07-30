function checkPassword(form)
{
    if(form.Password.value != "wTZQzc7V6FCH7r8")
    {
        alert("Wrong password");
        form.Password.focus();
        return false;
    }
    return true;
}