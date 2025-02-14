public class ArrayAlgorithms {
    
    
        public int max(int[] array) {
            int maxValue = array[0];
            for (int num : array) {
                if (num > maxValue) {
                    maxValue = num;
                }
            }
            return maxValue;
        }
    
        
        public int min(int[] array) {
            int minValue = array[0];
            for (int num : array) {
                if (num < minValue) {
                    minValue = num;
                }
            }
            return minValue;
        }
        public int searchNum(int[] array, int num) {
            int left = 0, right = array.length - 1;
    
            while (left <= right) {
                int mid = left + (right - left) / 2;
    
                if (array[mid] == num) 
                {
                    return mid; 
                }
                if (array[mid] < num) 
                {
                    left = mid + 1;
                }
                else {
                    right = mid - 1; 
                }
            }
            return -1;
        }
    
    }
    