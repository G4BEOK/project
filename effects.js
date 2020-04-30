
// Add button click actions here
document.addEventListener('DOMContentLoaded', function () {
  if(document.getElementById('submit-confuse')) {
    document.getElementById('submit-confuse').addEventListener('click', 
        function() {
            process("confuse");
        }
    );
  }
  if(document.getElementById('submit-mirror')) {
  document.getElementById('submit-mirror').addEventListener('click', 
        function() {
            process("mirror");
        }
    );
  }
  if(document.getElementById('submit-invert')) {
  document.getElementById('submit-invert').addEventListener('click', 
        function() {
            process("invert");
        }
    );
  }
  if(document.getElementById('submit-reverse')) {
  document.getElementById('submit-reverse').addEventListener('click', 
        function() {
            process("reverse");
        }
    );
  }
  if(document.getElementById('submit-bold')) {
  document.getElementById('submit-bold').addEventListener('click', 
        function() {
            process("bold");
        }
    );
  }
  if(document.getElementById('submit-italic')) {
  document.getElementById('submit-italic').addEventListener('click', 
        function() {
            process("italic");
        }
    );
  }
  if(document.getElementById('submit-clear')) {
  document.getElementById('submit-clear').addEventListener('click', 
        function() {
            process("clear");
        }
    );
  }
});

function mirror(input) {
    var output = "";
    // Input is a valid string
    if (typeof input === "string") {
        // Iterate over string
        for (var i = 0; i < input.length; i++) {
            var c = input.charAt(i);
            if (c in Mirrored) {
                output += Mirrored[c];
            }
            else (output += c)
        }
    }
    return output;
}

function invert(input) {
    var output = "";
    // Input is a valid string
    if (typeof input === "string") {
        // Iterate over string
        for (var i = 0; i < input.length; i++) {
            var c = input.charAt(i);
            if (c in Inverted) {
                output += Inverted[c];
            }
            else (output += c)
        }
    }
    return output;
}

function reverse(input) {
    var output = "";
    // Input is a valid string
    if (typeof input === "string") {
        // Iterate over string
        for (var i = input.length - 1; i >= 0; i--) {
            var c = input.charAt(i);
            if (c in Mirrored) {
                output += Mirrored[c];
            }
            else (output += c)
        }
    }
    return output;
}

function shrink(input) {
    var output = "";
    // Input is a valid string
    if (typeof input === "string") {
        // Iterate over string
        for (var i = 0; i < input.length; i++) {
            var c = input.charAt(i);
            if (c in Tiny) {
                output += Tiny[c];
            }
            else (output += c)
        }
    }
    return output;
}

function bold(input) {
    var output = "";
    // Input is a valid string
    if (typeof input === "string") {
        // Iterate over string
        for (var i = 0; i < input.length; i++) {
            var c = input.charAt(i);
            if (c in Bold) {
                output += Bold[c];
            }
            else (output += c)
        }
    }
    return output;
}

function italic(input) {
    var output = "";
    // Input is a valid string
    if (typeof input === "string") {
        // Iterate over string
        for (var i = 0; i < input.length; i++) {
            var c = input.charAt(i);
            if (c in Italic) {
                output += Italic[c];
            }
            else (output += c)
        }
    }
    return output;
}

function clear() {
    var input = document.getElementById("input");
    var output = document.getElementById("output");
    input.value = "";
    output.value = "";
}

// Process the action
function process(action) {
    var input = document.getElementById("input");
    if (action == "confuse") {
        output.innerHTML = confuse(input.value);
    }
    if (action == "mirror") {
        output.innerHTML = mirror(input.value);
    }
    if (action == "invert") {
        output.innerHTML = invert(input.value);
    }
    if (action == "reverse") {
        output.innerHTML = reverse(input.value);
    }
    if (action == "bold") {
        output.innerHTML = bold(input.value);
    }
    if (action == "italic") {
        output.innerHTML = italic(input.value);
    }
    if (action == "clear") {
        clear();
    }
}
