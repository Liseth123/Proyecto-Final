$(function () {
  var operation = "Crear";
  var selected_index = -1;
  var tblContacts = localStorage.getItem("tblContacts");
  tblContacts = JSON.parse(tblContacts);
  if (tblContacts === null)
      tblContacts = [];

  function Create() {
    var contact = JSON.stringify({
      ID: $("#txtID").val(),
      Nombre: $("#txtNombre").val(),
      TelefonoP: $("#txtTelefonoP").val(),
      TelefonoO: $("#txtTelefonoO").val(),
      CorreoP: $("#txtEmailP").val(),
      CorreoO: $("#txtEmailO").val(),
      Date: $("#txtdate").val()
    });
    tblContacts.push(contact);
    localStorage.setItem("tblContacts", JSON.stringify(tblContacts));
    alert("Los datos han sido almacenados");
    return true;
  }

  function Edit() {
    tblContacts[selected_index] = JSON.stringify({
        ID: $("#txtID").val(),
        Nombre: $("#txtNombre").val(),
        TelefonoP: $("#txtTelefonoP").val(),
        TelefonoO: $("#txtTelefonoO").val(),
        CorreoP: $("#txtEmailP").val(),
        CorreoO: $("#txtEmailO").val(),
        Date: $("#txtdate").val()
    });
    localStorage.setItem("tblContacts", JSON.stringify(tblContacts));
    alert("Los datos han sido editados");
    return true;
  }

  function Delete() {
    tblContacts.splice(selected_index, 1);
    localStorage.setItem("tblContacts", JSON.stringify(tblContacts));
    alert("Contacto Eliminado");
  }

  function List() {
    $("#tblList").html("");
    $("#tblList").html(
            "<thead>" +
            "<tr>" +
            "<th>ID</th>" +
            "<th>Nombre</th>" +
            "<th>Teléfono Personal</th>" +
            "<th>Teléfono Oficina</th>" +
            "<th>Correo Personal</th>" +
            "<th>Correo Oficina</th>" +
            "<th>Fecha Cumpleaños</th>" +
            "<th>Acciones</th>" +
            "</tr>" +
            "</thead>" +
            "<tbody>" +
            "</tbody>"
            );
    for (var i in tblContacts) {
        var con = JSON.parse(tblContacts[i]);
        $("#tblList tbody").append("<tr>" +
                "<td>" + con.ID + "</td>" +
                "<td>" + con.Nombre + "</td>" +
                "<td>" + con.TelefonoP + "</td>" +
                "<td>" + con.TelefonoO + "</td>" +
                "<td>" + con.CorreoP + "</td>" +
                "<td>" + con.CorreoO + "</td>" +
                "<td>" + con.Date + "</td>" +
                "<td><img src='edit.png' alt='Edit" + i + "'class='btnEdit'/>&nbsp &nbsp<img src='delete.png' alt='Delete" + i + "'class='btnDelete'/></td>" +
                "</tr>"
                );
    }
  }

  $("#frmContact").bind("submit", function () {
    if (operation === "Crear")
        return Create();
    else
        return Edit();
  });

  List();

  $("#confirm").click(function(){
    var bool=confirm("Seguro de eliminar el dato?");
    if(bool){
      alert("se elimino correctamente");
    }else{
      alert("cancelo la solicitud");
    }
  });

  $(".btnEdit").bind("click", function () {

    operation = "Editar";
    selected_index = parseInt($(this).attr("alt").replace("Edit", ""));
    var con = JSON.parse(tblContacts[selected_index]);
    $("#txtID").val(con.ID);
    $("#txtNombre").val(con.Nombre);
    $("#txtPhone").val(con.TelefonoP);
    $("#txtPhone").val(con.TelefonoO);
    $("#txtEmail").val(con.CorreoP);
    $("#txtEmail").val(con.CorreoO);
    $("#txtdate").val(con.Date);
    $("#txtID").attr("readonly", "readonly");
    $("#txtName").focus();
  });

  $(".btnDelete").bind("click", function () {
    selected_index = parseInt($(this).attr("alt").replace("Delete", ""));
    Delete();
    List();
  });
});
