var calc = {
    add: function (input) {
        var pattern = new RegExp(/^[-+.*()\/0-9\s]+$/);
        input = this.removeEmptySpaces(input);        
        return pattern.test(input) ? this.calculate(input) : undefined;
    },

    calculate: function(input){
            try {
                var result = +eval(input);
            }
            catch (err) {
                return undefined;
            } 

            if(this.isFloat(result))
            {
                var temp = result.toString().split('.');
                var value = temp[1];
                value.length > 1 ? result = +result.toFixed(2) : result = +result.toFixed(1);
            }
            return result;
    },

    isFloat: function(n){
         return Number(n) === n && n % 1 !== 0;
    },

    removeEmptySpaces: function(input) {
        var text = '';
        for(var i = 0; i < input.length; i++){
             if(input[i] == ' ')
                continue;
             text += input[i];
        }
            return text;
    }
};

module.exports = calc;