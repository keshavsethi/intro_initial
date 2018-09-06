(function() {
    angular.module("app", []).directive("countdown", ["Util", "$interval", function(b, a) {
        return {
            restrict: "A",
            scope: {
                date: "@"
            },
            link: function(e, d) {
                var c;
                c = new Date(e.date);
                a(function() {
                    var f;
                    f = Math.floor((c.getTime() - new Date().getTime()) / 1000);
                    return d.text(b.dhms(f))
                }, 1000)
            }
        }
    }]).factory("Util", [function() {
        return {
            dhms: function(c) {
                var e, a, b, d;
                e = Math.floor(c / 86400);
                c -= e * 86400;
                a = Math.floor(c / 3600) % 24;
                c -= a * 3600;
                b = Math.floor(c / 60) % 60;
                c -= b * 60;
                d = c % 60;
                return [e + "d", a + "h", b + "m", d + "s"].join(" ")
            }
        }
    }])
}).call(this);

function loaded() {
    setTimeout(function() {
        document.getElementById("loader-screen").style.display = "none";
        document.getElementsByClassName("part_1")[0].setAttribute("class", "part_1 part_1_anims");
        document.getElementsByClassName("image-1")[0].setAttribute("class", "image-1 image-1_anims");
        document.getElementsByClassName("logo")[0].setAttribute("class", "logo logo_anims");
        document.getElementsByClassName("part_2")[0].setAttribute("class", "part_2 part_2_anims");
        document.getElementsByClassName("svg1")[0].setAttribute("class", "svg_anims svg1");
        document.getElementsByClassName("line_1")[0].setAttribute("class", "line_1 line_1_anims");
        document.getElementsByClassName("time_animations_cls")[0].setAttribute("class", "time_anims time_animations_cls")
    }, 1000)
};