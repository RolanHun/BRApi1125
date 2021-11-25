class MyAjax {
  constructor() {}

  getAdat(apiVegPont, tomb, myCallback) {
    tomb.splice(0, tomb.length);

    $.ajax({
      url: apiVegPont,
      type: "GET",
      success: function (result) {
        result.forEach((element) => {
          tomb.push(element);
        });
        myCallback(tomb);
      },
    });
  }
  postAdat(apiVegPont, adat) {
    $.ajax({
      url: apiVegPont,
      type: "POST",
      data: adat,
      success: function (result) {

      },
    });
  }
  deleteAdat(apiVegPont, id) {
    $.ajax({
      url: apiVegPont+"/"+id,
      type: "DELETE",
      success: function (result) {
      },
    });
  }
  putAdat(apiVegPont, adat, id) {
    $.ajax({
      url: apiVegPont+"/"+id,
      type: "PUT",
      data:adat,
      success: function (result) {
      },
    });
  }
}
