const closeAllLists = (element, inp) => {
  /*close all autocomplete lists in the document,
        except the one passed as an argument:*/
  const x = document.getElementsByClassName("autocomplete-items");
  for (let i = 0; i < x.length; i++) {
    if (element != x[i] && element != inp) {
      x[i].parentNode.removeChild(x[i]);
    }
  }
};

export const autoComplete = (inp, arr, currentFocus, setcurrentFocus) => {
  const val = inp?.target?.value;
  console.log("ss", val, inp?.target?.value);
  if (!val) {
    return false;
  }
  let a = document?.createElement("DIV");
  a?.setAttribute("id", inp?.id + "autocomplete-list");
  a?.setAttribute("class", "autocomplete-items");
  inp?.target?.parentNode?.appendChild(a);

  arr?.forEach((elem) => {
    if (
      elem?.titel?.substr(0, val?.length)?.toUpperCase() == val?.toUpperCase()
    ) {
      let b = document?.createElement("DIV");
      b.innerHTML =
        "<strong>" + elem?.titel?.substr(0, val?.length) + "</strong>";
      b.innerHTML += elem?.titel?.substr(val?.length);
      b.innerHTML += "<input type='hidden' value='" + elem?.titel + "'>";
      b?.addEventListener("click", (e) => {
        inp.target.value = "";
        setcurrentFocus(elem);
        closeAllLists(e, inp);
      });
      a?.appendChild(b);
    }
  });

  /*execute a function presses a key on the keyboard:*/
  // inp.addEventListener("keydown", function(e) {
  //     const x = document.getElementById(this.id + "autocomplete-list");
  //     if (x) x = x.getElementsByTagName("div");
  //     if (e.keyCode == 40) {
  //       /*If the arrow DOWN key is pressed,
  //       increase the currentFocus constiable:*/
  //       currentFocus++;
  //       /*and and make the current item more visible:*/
  //       addActive(x);
  //     } else if (e.keyCode == 38) { //up
  //       /*If the arrow UP key is pressed,
  //       decrease the currentFocus constiable:*/
  //       currentFocus--;
  //       /*and and make the current item more visible:*/
  //       addActive(x);
  //     } else if (e.keyCode == 13) {
  //       /*If the ENTER key is pressed, prevent the form from being submitted,*/
  //       e.preventDefault();
  //       if (currentFocus > -1) {
  //         /*and simulate a click on the "active" item:*/
  //         if (x) x[currentFocus].click();
  //       }
  //     }
  // });
  // function addActive(x) {
  //   /*a function to classify an item as "active":*/
  //   if (!x) return false;
  //   /*start by removing the "active" class on all items:*/
  //   removeActive(x);
  //   if (currentFocus >= x.length) currentFocus = 0;
  //   if (currentFocus < 0) currentFocus = (x.length - 1);
  //   /*add class "autocomplete-active":*/
  //   x[currentFocus].classList.add("autocomplete-active");
  // }
  // function removeActive(x) {
  //   /*a function to remove the "active" class from all autocomplete items:*/
  //   for (const i = 0; i < x.length; i++) {
  //     x[i].classList.remove("autocomplete-active");
  //   }
  // }

  /*execute a function when someone clicks in the document:*/
  // document.addEventListener("click", function (e) {
  //     closeAllLists(e.target);
  // });
};
