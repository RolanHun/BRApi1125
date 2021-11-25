$(function () {
  const myAjax = new MyAjax();
  const szuloElem = $(".megjelenit");
  const listElem = $("#form1");
  const konyvek = [];
  let apiVegPont = "http://localhost:3000/konyvek";
  let szuro = "?tipus=regény";
  let rendezes = "?_sort=ar&_order=desc";
  let kereso = $("#kereso");

  myAjax.getAdat(apiVegPont, konyvek, kiir);

  $("#rendezes").on("click", () => {
    apiVegPont = "http://localhost:3000/konyvek";
    apiVegPont += rendezes;
    myAjax.getAdat(apiVegPont, konyvek, kiir);
  });
  $("#ujadat").on("click", () => {
    let hossz = konyvek.length;
    let ujAdat = {
      id: hossz + 1,
      szerzo: $("#szerzo").val(),
      cim: $("#cim").val(),
      ar: $("#ar").val(),
      tipus: $("#tipus").val(),
    };
    myAjax.postAdat(apiVegPont, ujAdat);
  });
  $("#torol").on("click", () => {
    let torolendoID = $("#torolID").val();
    myAjax.deleteAdat(apiVegPont, torolendoID);
  });
  $("#modosit").on("click", () => {
    let valasztottid = $("#idMod").val();
    let ujAdat = {
      id: valasztottid,
      szerzo: $("#szerzoMod").val(),
      cim: $("#cimMod").val(),
      ar: $("#arMod").val(),
      tipus: $("#tipusMod").val(),
    };
    myAjax.putAdat(apiVegPont, ujAdat, valasztottid);
  });
  $("#kereso").on("keyup", () => {
    apiVegPont = "http://localhost:3000/konyvek";
    apiVegPont += "?q=" + kereso.val();
    myAjax.getAdat(apiVegPont, konyvek, kiir);
  });
  function kiir(tomb) {
    let sablon = "";
    let idklist = `<select id="idMod">`;
    tomb.forEach((elem) => {
      sablon += `
            <div>
            <h3>${elem.szerzo}</h3>
            <h4 class="cim">
            ${elem.cim}
            </h4>
            <p>${elem.tipus}</p>
            <span class="ar">${elem.ar} Ft</span>
            </div>
            `;
            idklist+=`
            <option id="${elem.id}" value="${elem.id}">${elem.id}</option>
            `;
    });
    idklist+=`</select>`;
    szuloElem.html(sablon);
    listElem.append(idklist);
  }
});
