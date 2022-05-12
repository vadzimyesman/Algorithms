var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */

    return function(n) {
        let left = 1
        let right = n
        while (left<right){
            if (isBadVersion(Math.floor((left+right)/2))){
                right = Math.floor((left+right)/2)
            } else left = Math.floor((left+right)/2)+1
        }
        return left
    };
};