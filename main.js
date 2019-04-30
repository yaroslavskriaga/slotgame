new Vue({
  el: '#app',
  data: {
    balance: '',
    isHidden: false,
    disabled: false,
    timeout: null
  },
  methods: {

    sleep: function(ms) {
      return new Promise(res => setTimeout(res, ms));
    },

    slotmachinerandom: async function() {
      //Random mode slotmachine
      //async for await function to get a "pause" in a thread


      //Payment table
      var table = document.getElementById("infotable");

      //Path to images
      var Directory = "./img/";
      var list = new Array();

      //Adding images on the reels
      for (var i = 0; i < 5; i++) {
        list[i] = Directory + i + ".png";
        new Image().src = list[i];
      }

      //Main balance condition
      if (this.balance >= 1) {

        this.balance = this.balance - 1;

        //Start spinning
        //First reel(left)
        var left1 = Math.floor(Math.random() * 5);
        document.left1.src = list[left1];

        var left2 = Math.floor(Math.random() * 5);
        document.left2.src = list[left2];

        var left3 = Math.floor(Math.random() * 5);
        document.left3.src = list[left3];

        await this.sleep(500);

        //Second reel(center)
        var center1 = Math.floor(Math.random() * 5);
        document.center1.src = list[center1];

        var center2 = Math.floor(Math.random() * 5);
        document.center2.src = list[center2];

        var center3 = Math.floor(Math.random() * 5);
        document.center3.src = list[center3];

        await this.sleep(500);

        //Third reel(right)
        var right1 = Math.floor(Math.random() * 5);
        document.right1.src = list[right1];

        var right2 = Math.floor(Math.random() * 5);
        document.right2.src = list[right2];

        var right3 = Math.floor(Math.random() * 5);
        document.right3.src = list[right3];

        //First line matching
        var final_left1 = list[left1];
        var final_center1 = list[center1];
        var final_right1 = list[right1];

        //Win conditions
        if ((final_left1 == './img/4.png') && (final_left1 == final_center1) && (final_left1 == final_right1)) {
          var row = table.insertRow(1);
          var cell1 = row.insertCell(0);
          cell1.innerHTML = "WON 2000";
          this.balance = this.balance + 2000;
          document.right1.classList.add("win");
          document.center1.classList.add("win");
          document.left1.classList.add("win");


        } else if ((final_left1 == './img/3.png') && (final_left1 == final_center1) && (final_left1 == final_right1)) {
          var row = table.insertRow(1);
          var cell1 = row.insertCell(0);
          cell1.innerHTML = "WON 150!";
          this.balance = this.balance + 150;
          document.right1.classList.add("win");
          document.center1.classList.add("win");
          document.left1.classList.add("win");

        } else if ((final_left1 == './img/2.png') && (final_left1 == final_center1) && (final_left1 == final_right1)) {
          var row = table.insertRow(1);
          var cell1 = row.insertCell(0);
          cell1.innerHTML = "WON 50!";
          this.balance = this.balance + 50;
          document.right1.classList.add("win");
          document.center1.classList.add("win");
          document.left1.classList.add("win");

        } else if ((final_left1 == './img/1.png') && (final_left1 == final_center1) && (final_left1 == final_right1)) {
          var row = table.insertRow(1);
          var cell1 = row.insertCell(0);
          cell1.innerHTML = "WON 20!";
          this.balance = this.balance + 20;
          document.right1.classList.add("win");
          document.center1.classList.add("win");
          document.left1.classList.add("win");

        } else if ((final_left1 == './img/0.png') && (final_left1 == final_center1) && (final_left1 == final_right1)) {
          var row = table.insertRow(1);
          var cell1 = row.insertCell(0);
          cell1.innerHTML = "WON 10!";
          this.balance = this.balance + 10;
          document.right1.classList.add("win");
          document.center1.classList.add("win");
          document.left1.classList.add("win");

        } else if (((final_left1 == './img/0.png') || (final_left1 == './img/1.png') || (final_left1 == './img/2.png')) &&
          ((final_center1 == './img/0.png') || (final_center1 == './img/1.png') || (final_center1 == './img/2.png')) &&
          ((final_right1 == './img/0.png') || (final_right1 == './img/1.png') || (final_right1 == './img/2.png'))) {
          var row = table.insertRow(1);
          var cell1 = row.insertCell(0);
          cell1.innerHTML = "WON 5!";
          this.balance = this.balance + 5;
          document.right1.classList.add("win");
          document.center1.classList.add("win");
          document.left1.classList.add("win");


        } else if (((final_left1 == './img/3.png') || (final_left1 == './img/4.png')) &&
          ((final_center1 == './img/3.png') || (final_center1 == './img/4.png')) &&
          ((final_right1 == './img/3.png') || (final_right1 == './img/4.png'))) {
          var row = table.insertRow(1);
          var cell1 = row.insertCell(0);
          cell1.innerHTML = "WON 75!";
          this.balance = this.balance + 75;
          document.right1.classList.add("win");
          document.center1.classList.add("win");
          document.left1.classList.add("win");

        }



        //Second reel matching
        var final_left2 = list[left2];
        var final_center2 = list[center2];
        var final_right2 = list[right2];

        //Win conditions
        if ((final_left2 == './img/4.png') && (final_left2 == final_center2) && (final_left2 == final_right2)) {
          var row = table.insertRow(1);
          var cell1 = row.insertCell(0);
          cell1.innerHTML = "WON 1000!";
          this.balance = this.balance + 1000;
          document.right2.classList.add("win");
          document.center2.classList.add("win");
          document.left2.classList.add("win");

        } else if ((final_left2 == './img/3.png') && (final_left2 == final_center2) && (final_left2 == final_right2)) {
          var row = table.insertRow(1);
          var cell1 = row.insertCell(0);
          cell1.innerHTML = "WON 150!";
          this.balance = this.balance + 150;
          document.right2.classList.add("win");
          document.center2.classList.add("win");
          document.left2.classList.add("win");

        } else if ((final_left2 == './img/2.png') && (final_left2 == final_center2) && (final_left2 == final_right2)) {
          var row = table.insertRow(1);
          var cell1 = row.insertCell(0);
          cell1.innerHTML = "WON 50!";
          this.balance = this.balance + 50;
          document.right2.classList.add("win");
          document.center2.classList.add("win");
          document.left2.classList.add("win");

        } else if ((final_left2 == './img/1.png') && (final_left2 == final_center2) && (final_left2 == final_right2)) {
          var row = table.insertRow(1);
          var cell1 = row.insertCell(0);
          cell1.innerHTML = "WON 20!";
          this.balance = this.balance + 20;
          document.right2.classList.add("win");
          document.center2.classList.add("win");
          document.left2.classList.add("win");

        } else if ((final_left2 == './img/0.png') && (final_left2 == final_center2) && (final_left2 == final_right2)) {
          var row = table.insertRow(1);
          var cell1 = row.insertCell(0);
          cell1.innerHTML = "WON 10!";
          this.balance = this.balance + 10;
          document.right2.classList.add("win");
          document.center2.classList.add("win");
          document.left2.classList.add("win");

        } else if (((final_left2 == './img/0.png') || (final_left2 == './img/1.png') || (final_left2 == './img/2.png')) &&
          ((final_center2 == './img/0.png') || (final_center2 == './img/1.png') || (final_center2 == './img/2.png')) &&
          ((final_right2 == './img/0.png') || (final_right2 == './img/1.png') || (final_right2 == './img/2.png'))) {
          var row = table.insertRow(1);
          var cell1 = row.insertCell(0);
          cell1.innerHTML = "WON 5!";
          this.balance = this.balance + 5;
          document.right2.classList.add("win");
          document.center2.classList.add("win");
          document.left2.classList.add("win");

        } else if (((final_left2 == './img/3.png') || (final_left2 == './img/4.png')) &&
          ((final_center2 == './img/3.png') || (final_center2 == './img/4.png')) &&
          ((final_right2 == './img/3.png') || (final_right2 == './img/4.png'))) {
          var row = table.insertRow(1);
          var cell1 = row.insertCell(0);
          cell1.innerHTML = "WON 75!";
          this.balance = this.balance + 75;
          document.right2.classList.add("win");
          document.center2.classList.add("win");
          document.left2.classList.add("win");

        }




        //Third line matching
        var final_left3 = list[left3];
        var final_center3 = list[center3];
        var final_right3 = list[right3];

        //Win conditions
        if ((final_left3 == './img/4.png') && (final_left3 == final_center3) && (final_left3 == final_right3)) {
          var row = table.insertRow(1);
          var cell1 = row.insertCell(0);
          cell1.innerHTML = "WON 4000!";
          this.balance = this.balance + 4000;
          document.right3.classList.add("win");
          document.center3.classList.add("win");
          document.left3.classList.add("win");

        } else if ((final_left3 == './img/3.png') && (final_left3 == final_center3) && (final_left3 == final_right3)) {
          var row = table.insertRow(1);
          var cell1 = row.insertCell(0);
          cell1.innerHTML = "WON 150!";
          this.balance = this.balance + 150;
          document.right3.classList.add("win");
          document.center3.classList.add("win");
          document.left3.classList.add("win");

        } else if ((final_left3 == './img/2.png') && (final_left3 == final_center3) && (final_left3 == final_right3)) {
          var row = table.insertRow(1);
          var cell1 = row.insertCell(0);
          cell1.innerHTML = "WON 50!";
          this.balance = this.balance + 50;
          document.right3.classList.add("win");
          document.center3.classList.add("win");
          document.left3.classList.add("win");

        } else if ((final_left3 == './img/1.png') && (final_left1 == final_center1) && (final_left3 == final_right3)) {
          var row = table.insertRow(1);
          var cell1 = row.insertCell(0);
          cell1.innerHTML = "WON 20!";
          this.balance = this.balance + 20;
          document.right3.classList.add("win");
          document.center3.classList.add("win");
          document.left3.classList.add("win");

        } else if ((final_left3 == './img/0.png') && (final_left3 == final_center3) && (final_left3 == final_right3)) {
          var row = table.insertRow(1);
          var cell1 = row.insertCell(0);
          cell1.innerHTML = "WON 10!";
          this.balance = this.balance + 10;
          document.right3.classList.add("win");
          document.center3.classList.add("win");
          document.left3.classList.add("win");

        } else if (((final_left3 == './img/0.png') || (final_left3 == './img/1.png') || (final_left3 == './img/2.png')) &&
          ((final_center3 == './img/0.png') || (final_center3 == './img/1.png') || (final_center3 == './img/2.png')) &&
          ((final_right3 == './img/0.png') || (final_right3 == './img/1.png') || (final_right3 == './img/2.png'))) {
          var row = table.insertRow(1);
          var cell1 = row.insertCell(0);
          cell1.innerHTML = "WON 5!";
          this.balance = this.balance + 5;
          document.right3.classList.add("win");
          document.center3.classList.add("win");
          document.left3.classList.add("win");

        } else if (((final_left3 == './img/3.png') || (final_left3 == './img/4.png')) &&
          ((final_center3 == './img/3.png') || (final_center3 == './img/4.png')) &&
          ((final_right3 == './img/3.png') || (final_right3 == './img/4.png'))) {
          var row = table.insertRow(1);
          var cell1 = row.insertCell(0);
          cell1.innerHTML = "WON 75!";
          this.balance = this.balance + 75;
          document.right3.classList.add("win");
          document.center3.classList.add("win");
          document.left3.classList.add("win");
        }

        await this.sleep(1000);

        //Remove marking of the win
        document.right1.classList.remove("win");
        document.center1.classList.remove("win");
        document.left1.classList.remove("win");

        document.right2.classList.remove("win");
        document.center2.classList.remove("win");
        document.left2.classList.remove("win");

        document.right3.classList.remove("win");
        document.center3.classList.remove("win");
        document.left3.classList.remove("win");


      } else {
        alert("Not enough balance!");
      }

    },

    slotmachinefixedmode: function(event) {
      //Random mode slotmachine


      //Payment table as well
      var table = document.getElementById("infotable");


      //Path to images
      var Directory = "./img/";
      var list = new Array();

      //Adding images on the reels
      for (var i = 0; i < 5; i++) {
        list[i] = Directory + i + ".png";
        new Image().src = list[i];
      }

      //Main balance condition
      if (this.balance >= 1) {

        this.balance = this.balance - 1;

        //Value listeners for testing
        var dropdownreelsvalue = document.getElementById("dropdownreels").value;
        var dropdownpositionsvalue = document.getElementById("dropdownpositions").value;

        //FINAL LISTENER
        var dropdownsymbolsvalue = event.target.value;

        //SELECT CONDITIONS
        //LEFT-SIDE REEL
        if (dropdownreelsvalue == "left") {

          if (dropdownpositionsvalue == "top") {

            if (dropdownsymbolsvalue == "BAR") {
              //First reel(left)
              //TOP CELL
              var left1 = 0;
              document.left1.src = list[left1];

            } else if (dropdownsymbolsvalue == "2xBAR") {
              //First reel(left)
              //TOP CELL
              var left1 = 1;
              document.left1.src = list[left1];

            } else if (dropdownsymbolsvalue == "3xBAR") {
              //First reel(left)
              //TOP CELL
              var left1 = 2;
              document.left1.src = list[left1];

            } else if (dropdownsymbolsvalue == "7") {
              //First reel(left)
              //TOP CELL
              var left1 = 3;
              document.left1.src = list[left1];
            } else if (dropdownsymbolsvalue == "CHERRY") {
              //First reel(left)
              //TOP CELL
              var left1 = 4;
              document.left1.src = list[left1];
            }


          }

          if (dropdownpositionsvalue == "center") {

            if (dropdownsymbolsvalue == "BAR") {
              //First reel(left)
              //CENTER CELL
              var left2 = 0;
              document.left2.src = list[left2];

            } else if (dropdownsymbolsvalue == "2xBAR") {
              //First reel(left)
              //CENTER CELL
              var left2 = 1;
              document.left2.src = list[left2];

            } else if (dropdownsymbolsvalue == "3xBAR") {
              //First reel(left)
              //CENTER CELL
              var left2 = 2;
              document.left2.src = list[left2];

            } else if (dropdownsymbolsvalue == "7") {
              //First reel(left)
              //CENTER CELL
              var left2 = 3;
              document.left2.src = list[left2];
            } else if (dropdownsymbolsvalue == "CHERRY") {
              //First reel(left)
              //CENTER CELL
              var left2 = 4;
              document.left2.src = list[left2];
            }


          }

          if (dropdownpositionsvalue == "bottom") {

            if (dropdownsymbolsvalue == "BAR") {
              //First reel(left)
              //BOTTOM CELL
              var left3 = 0;
              document.left3.src = list[left3];

            } else if (dropdownsymbolsvalue == "2xBAR") {
              //First reel(left)
              //BOTTOM CELL
              var left3 = 1;
              document.left3.src = list[left3];

            } else if (dropdownsymbolsvalue == "3xBAR") {
              //First reel(left)
              //BOTTOM CELL
              var left3 = 2;
              document.left3.src = list[left3];

            } else if (dropdownsymbolsvalue == "7") {
              //First reel(left)
              //BOTTOM CELL
              var left3 = 3;
              document.left3.src = list[left3];
            }

            if (dropdownsymbolsvalue == "CHERRY") {
              //First reel(left)
              //BOTTOM CELL
              var left3 = 4;
              document.left3.src = list[left3];
            }

          }
        }


        //CENTER REEL
        else if (dropdownreelsvalue == "center") {

          if (dropdownpositionsvalue == "top") {

            if (dropdownsymbolsvalue == "BAR") {
              //Second reel(center)
              //TOP CELL
              var center1 = 0;
              document.center1.src = list[center1];

            } else if (dropdownsymbolsvalue == "2xBAR") {
              //Second reel(center)
              //TOP CELL
              var center1 = 1;
              document.center1.src = list[center1];

            } else if (dropdownsymbolsvalue == "3xBAR") {
              //Second reel(center)
              //TOP CELL
              var center1 = 2;
              document.center1.src = list[center1];

            } else if (dropdownsymbolsvalue == "7") {
              //Second reel(center)
              //TOP CELL
              var center1 = 3;
              document.center1.src = list[center1];
            } else if (dropdownsymbolsvalue == "CHERRY") {
              //Second reel(center)
              //TOP CELL
              var center1 = 4;
              document.center1.src = list[center1];
            }


          }

          if (dropdownpositionsvalue == "center") {

            if (dropdownsymbolsvalue == "BAR") {
              //Second reel(center)
              //CENTER CELL
              var center2 = 0;
              document.center2.src = list[center2];

            } else if (dropdownsymbolsvalue == "2xBAR") {
              //Second reel(center)
              //CENTER CELL
              var center2 = 1;
              document.center2.src = list[center2];

            } else if (dropdownsymbolsvalue == "3xBAR") {
              //Second reel(center)
              //CENTER CELL
              var center2 = 2;
              document.center2.src = list[center2];

            } else if (dropdownsymbolsvalue == "7") {
              //Second reel(center)
              //CENTER CELL
              var center2 = 3;
              document.center2.src = list[center2];
            } else if (dropdownsymbolsvalue == "CHERRY") {
              //Second reel(center)
              //CENTER CELL
              var center2 = 4;
              document.center2.src = list[center2];
            }


          }

          if (dropdownpositionsvalue == "bottom") {

            if (dropdownsymbolsvalue == "BAR") {
              //Second reel(center)
              //BOTTOM CELL
              var center3 = 0;
              document.center3.src = list[center3];

            } else if (dropdownsymbolsvalue == "2xBAR") {
              //First reel(left)
              //BOTTOM CELL
              var center3 = 1;
              document.center3.src = list[center3];

            } else if (dropdownsymbolsvalue == "3xBAR") {
              //First reel(left)
              //BOTTOM CELL
              var center3 = 2;
              document.center3.src = list[center3];

            } else if (dropdownsymbolsvalue == "7") {
              //First reel(left)
              //BOTTOM CELL
              var center3 = 3;
              document.center3.src = list[center3];
            }

            if (dropdownsymbolsvalue == "CHERRY") {
              //First reel(left)
              //BOTTOM CELL
              var center3 = 4;
              document.center3.src = list[center3];
            }

          }
        }


        //RIGHT REEL
        else if (dropdownreelsvalue == "right") {

          if (dropdownpositionsvalue == "top") {

            if (dropdownsymbolsvalue == "BAR") {
              //Third reel(right)
              //TOP CELL
              var right1 = 0;
              document.right1.src = list[right1];

            } else if (dropdownsymbolsvalue == "2xBAR") {
              //Third reel(right)
              //TOP CELL
              var right1 = 1;
              document.right1.src = list[right1];

            } else if (dropdownsymbolsvalue == "3xBAR") {
              //Third reel(right)
              //TOP CELL
              var right1 = 2;
              document.right1.src = list[right1];

            } else if (dropdownsymbolsvalue == "7") {
              //Third reel(right)
              //TOP CELL
              var right1 = 3;
              document.right1.src = list[right1];
            } else if (dropdownsymbolsvalue == "CHERRY") {
              //Third reel(right)
              //TOP CELL
              var right1 = 4;
              document.right1.src = list[right1];
            }


          }

          if (dropdownpositionsvalue == "center") {

            if (dropdownsymbolsvalue == "BAR") {
              //Third reel(right)
              //CENTER CELL
              var right2 = 0;
              document.right2.src = list[right2];

            } else if (dropdownsymbolsvalue == "2xBAR") {
              //Third reel(right)
              //CENTER CELL
              var right2 = 1;
              document.right2.src = list[right2];

            } else if (dropdownsymbolsvalue == "3xBAR") {
              //Third reel(right)
              //CENTER CELL
              var right2 = 2;
              document.right2.src = list[right2];

            } else if (dropdownsymbolsvalue == "7") {
              //Third reel(right)
              //CENTER CELL
              var right2 = 3;
              document.right2.src = list[right2];
            } else if (dropdownsymbolsvalue == "CHERRY") {
              //Third reel(right)
              //CENTER CELL
              var right2 = 4;
              document.right2.src = list[right2];
            }


          }

          if (dropdownpositionsvalue == "bottom") {

            if (dropdownsymbolsvalue == "BAR") {
              //Third reel(right)
              //BOTTOM CELL
              var right3 = 0;
              document.right3.src = list[right3];

            } else if (dropdownsymbolsvalue == "2xBAR") {
              //Third reel(right)
              //BOTTOM CELL
              var right3 = 1;
              document.right3.src = list[right3];

            } else if (dropdownsymbolsvalue == "3xBAR") {
              //Third reel(right)
              //BOTTOM CELL
              var right3 = 2;
              document.right3.src = list[right3];

            } else if (dropdownsymbolsvalue == "7") {
              //Third reel(right)
              //BOTTOM CELL
              var right3 = 3;
              document.right3.src = list[right3];
            }

            if (dropdownsymbolsvalue == "CHERRY") {
              //Third reel(right)
              //BOTTOM CELL
              var right3 = 4;
              document.right3.src = list[right3];
            }

          }
        }

      } else {
        alert("Not enough balance!");
      }




    },

    //To Avoid multiclicking and got a second "pause" between clicks
    delay() {
      this.disabled = true

      this.timeout = setTimeout(() => {
        this.disabled = false
      }, 2500)

      this.slotmachinerandom();
      this.testmodegetprize();
    },

    testmodegetprize: async function() {
      //asyng to get paused

      //Directory var
      var Directory = "./img/"

      if (this.balance >= 1) {

        this.balance = this.balance - 1;

        //Payment table
        var table = document.getElementById("infotable");

        //First line matching
        //Cut the right path before each match
        var finalleft1 = document.left1.src
        var final_left1 = Directory + finalleft1.split('/').pop();

        var finalcenter1 = document.center1.src;
        var final_center1 = Directory + finalcenter1.split('/').pop();

        var finalright1 = document.right1.src;
        var final_right1 = Directory + finalright1.split('/').pop();


        //Win conditions
        if ((final_left1 == './img/4.png') && (final_left1 == final_center1) && (final_left1 == final_right1)) {
          var row = table.insertRow(1);
          var cell1 = row.insertCell(0);
          cell1.innerHTML = "WON 2000";
          this.balance = this.balance + 2000;
          document.right1.classList.add("win");
          document.center1.classList.add("win");
          document.left1.classList.add("win");


        } else if ((final_left1 == './img/3.png') && (final_left1 == final_center1) && (final_left1 == final_right1)) {
          var row = table.insertRow(1);
          var cell1 = row.insertCell(0);
          cell1.innerHTML = "WON 150!";
          this.balance = this.balance + 150;
          document.right1.classList.add("win");
          document.center1.classList.add("win");
          document.left1.classList.add("win");

        } else if ((final_left1 == './img/2.png') && (final_left1 == final_center1) && (final_left1 == final_right1)) {
          var row = table.insertRow(1);
          var cell1 = row.insertCell(0);
          cell1.innerHTML = "WON 50!";
          this.balance = this.balance + 50;
          document.right1.classList.add("win");
          document.center1.classList.add("win");
          document.left1.classList.add("win");

        } else if ((final_left1 == './img/1.png') && (final_left1 == final_center1) && (final_left1 == final_right1)) {
          var row = table.insertRow(1);
          var cell1 = row.insertCell(0);
          cell1.innerHTML = "WON 20!";
          this.balance = this.balance + 20;
          document.right1.classList.add("win");
          document.center1.classList.add("win");
          document.left1.classList.add("win");

        } else if ((final_left1 == './img/0.png') && (final_left1 == final_center1) && (final_left1 == final_right1)) {
          var row = table.insertRow(1);
          var cell1 = row.insertCell(0);
          cell1.innerHTML = "WON 10!";
          this.balance = this.balance + 10;
          document.right1.classList.add("win");
          document.center1.classList.add("win");
          document.left1.classList.add("win");

        } else if (((final_left1 == './img/0.png') || (final_left1 == './img/1.png') || (final_left1 == './img/2.png')) &&
          ((final_center1 == './img/0.png') || (final_center1 == './img/1.png') || (final_center1 == './img/2.png')) &&
          ((final_right1 == './img/0.png') || (final_right1 == './img/1.png') || (final_right1 == './img/2.png'))) {
          var row = table.insertRow(1);
          var cell1 = row.insertCell(0);
          cell1.innerHTML = "WON 5!";
          this.balance = this.balance + 5;
          document.right1.classList.add("win");
          document.center1.classList.add("win");
          document.left1.classList.add("win");


        } else if (((final_left1 == './img/3.png') || (final_left1 == './img/4.png')) &&
          ((final_center1 == './img/3.png') || (final_center1 == './img/4.png')) &&
          ((final_right1 == './img/3.png') || (final_right1 == './img/4.png'))) {
          var row = table.insertRow(1);
          var cell1 = row.insertCell(0);
          cell1.innerHTML = "WON 75!";
          this.balance = this.balance + 75;
          document.right1.classList.add("win");
          document.center1.classList.add("win");
          document.left1.classList.add("win");

        }

        await this.sleep(500);

        //Second line matching
        var finalleft2 = document.left2.src
        var final_left2 = Directory + finalleft2.split('/').pop();

        var finalcenter2 = document.center2.src;
        var final_center2 = Directory + finalcenter2.split('/').pop();

        var finalright2 = document.right2.src;
        var final_right2 = Directory + finalright2.split('/').pop();


        //Win conditions
        if ((final_left2 == './img/4.png') && (final_left2 == final_center2) && (final_left2 == final_right2)) {
          var row = table.insertRow(1);
          var cell1 = row.insertCell(0);
          cell1.innerHTML = "WON 1000!";
          this.balance = this.balance + 1000;
          document.right2.classList.add("win");
          document.center2.classList.add("win");
          document.left2.classList.add("win");

        } else if ((final_left2 == './img/3.png') && (final_left2 == final_center2) && (final_left2 == final_right2)) {
          var row = table.insertRow(1);
          var cell1 = row.insertCell(0);
          cell1.innerHTML = "WON 150!";
          this.balance = this.balance + 150;
          document.right2.classList.add("win");
          document.center2.classList.add("win");
          document.left2.classList.add("win");

        } else if ((final_left2 == './img/2.png') && (final_left2 == final_center2) && (final_left2 == final_right2)) {
          var row = table.insertRow(1);
          var cell1 = row.insertCell(0);
          cell1.innerHTML = "WON 50!";
          this.balance = this.balance + 50;
          document.right2.classList.add("win");
          document.center2.classList.add("win");
          document.left2.classList.add("win");

        } else if ((final_left2 == './img/1.png') && (final_left2 == final_center2) && (final_left2 == final_right2)) {
          var row = table.insertRow(1);
          var cell1 = row.insertCell(0);
          cell1.innerHTML = "WON 20!";
          this.balance = this.balance + 20;
          document.right2.classList.add("win");
          document.center2.classList.add("win");
          document.left2.classList.add("win");

        } else if ((final_left2 == './img/0.png') && (final_left2 == final_center2) && (final_left2 == final_right2)) {
          var row = table.insertRow(1);
          var cell1 = row.insertCell(0);
          cell1.innerHTML = "WON 10!";
          this.balance = this.balance + 10;
          document.right2.classList.add("win");
          document.center2.classList.add("win");
          document.left2.classList.add("win");

        } else if (((final_left2 == './img/0.png') || (final_left2 == './img/1.png') || (final_left2 == './img/2.png')) &&
          ((final_center2 == './img/0.png') || (final_center2 == './img/1.png') || (final_center2 == './img/2.png')) &&
          ((final_right2 == './img/0.png') || (final_right2 == './img/1.png') || (final_right2 == './img/2.png'))) {
          var row = table.insertRow(1);
          var cell1 = row.insertCell(0);
          cell1.innerHTML = "WON 5!";
          this.balance = this.balance + 5;
          document.right2.classList.add("win");
          document.center2.classList.add("win");
          document.left2.classList.add("win");

        } else if (((final_left2 == './img/3.png') || (final_left2 == './img/4.png')) &&
          ((final_center2 == './img/3.png') || (final_center2 == './img/4.png')) &&
          ((final_right2 == './img/3.png') || (final_right2 == './img/4.png'))) {
          var row = table.insertRow(1);
          var cell1 = row.insertCell(0);
          cell1.innerHTML = "WON 75!";
          this.balance = this.balance + 75;
          document.right2.classList.add("win");
          document.center2.classList.add("win");
          document.left2.classList.add("win");

        }


        await this.sleep(500);


        //Third line matching
        var finalleft3 = document.left3.src
        var final_left3 = Directory + finalleft3.split('/').pop();

        var finalcenter3 = document.center3.src;
        var final_center3 = Directory + finalcenter3.split('/').pop();

        var finalright3 = document.right3.src;
        var final_right3 = Directory + finalright3.split('/').pop();

        //Win conditions
        if ((final_left3 == './img/4.png') && (final_left3 == final_center3) && (final_left3 == final_right3)) {
          var row = table.insertRow(1);
          var cell1 = row.insertCell(0);
          cell1.innerHTML = "WON 4000!";
          this.balance = this.balance + 4000;
          document.right3.classList.add("win");
          document.center3.classList.add("win");
          document.left3.classList.add("win");

        } else if ((final_left3 == './img/3.png') && (final_left3 == final_center3) && (final_left3 == final_right3)) {
          var row = table.insertRow(1);
          var cell1 = row.insertCell(0);
          cell1.innerHTML = "WON 150!";
          this.balance = this.balance + 150;
          document.right3.classList.add("win");
          document.center3.classList.add("win");
          document.left3.classList.add("win");

        } else if ((final_left3 == './img/2.png') && (final_left3 == final_center3) && (final_left3 == final_right3)) {
          var row = table.insertRow(1);
          var cell1 = row.insertCell(0);
          cell1.innerHTML = "WON 50!";
          this.balance = this.balance + 50;
          document.right3.classList.add("win");
          document.center3.classList.add("win");
          document.left3.classList.add("win");

        } else if ((final_left3 == './img/1.png') && (final_left1 == final_center1) && (final_left3 == final_right3)) {
          var row = table.insertRow(1);
          var cell1 = row.insertCell(0);
          cell1.innerHTML = "WON 20!";
          this.balance = this.balance + 20;
          document.right3.classList.add("win");
          document.center3.classList.add("win");
          document.left3.classList.add("win");

        } else if ((final_left3 == './img/0.png') && (final_left3 == final_center3) && (final_left3 == final_right3)) {
          var row = table.insertRow(1);
          var cell1 = row.insertCell(0);
          cell1.innerHTML = "WON 10!";
          this.balance = this.balance + 10;
          document.right3.classList.add("win");
          document.center3.classList.add("win");
          document.left3.classList.add("win");

        } else if (((final_left3 == './img/0.png') || (final_left3 == './img/1.png') || (final_left3 == './img/2.png')) &&
          ((final_center3 == './img/0.png') || (final_center3 == './img/1.png') || (final_center3 == './img/2.png')) &&
          ((final_right3 == './img/0.png') || (final_right3 == './img/1.png') || (final_right3 == './img/2.png'))) {
          var row = table.insertRow(1);
          var cell1 = row.insertCell(0);
          cell1.innerHTML = "WON 5!";
          this.balance = this.balance + 5;
          document.right3.classList.add("win");
          document.center3.classList.add("win");
          document.left3.classList.add("win");

        } else if (((final_left3 == './img/3.png') || (final_left3 == './img/4.png')) &&
          ((final_center3 == './img/3.png') || (final_center3 == './img/4.png')) &&
          ((final_right3 == './img/3.png') || (final_right3 == './img/4.png'))) {
          var row = table.insertRow(1);
          var cell1 = row.insertCell(0);
          cell1.innerHTML = "WON 75!";
          this.balance = this.balance + 75;
          document.right3.classList.add("win");
          document.center3.classList.add("win");
          document.left3.classList.add("win");
        }

        await this.sleep(1000);


        //Remove marking of the win
        document.right1.classList.remove("win");
        document.center1.classList.remove("win");
        document.left1.classList.remove("win");

        document.right2.classList.remove("win");
        document.center2.classList.remove("win");
        document.left2.classList.remove("win");

        document.right3.classList.remove("win");
        document.center3.classList.remove("win");
        document.left3.classList.remove("win");

      } else {
        alert("Not enough balance!")
      }

    },
    delaytest() {

      this.disabled = true

      this.timeout = setTimeout(() => {
        this.disabled = false
      }, 2500)

      this.testmodegetprize();
    },
  },
  beforeDestroy() {
    clearTimeout(this.timeout)
  }

})
