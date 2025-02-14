

public class Arraynum {

    
    public static void main(String[] args) {
        ArrayAlgorithms m = new ArrayAlgorithms();
        int[] myArray = {1,2,3,4,5,6,78,88,343,565,5446,454,5445,77};

       
    
        int num = Integer.parseInt(args[0]);
        System.out.println("time before max");
        long time_before_max = System.currentTimeMillis();
        System.out.println(time_before_max);
        System.out.println("the max number is "+m.max(myArray));
        
        System.out.println("time after max");
        long time_after_max = System.currentTimeMillis();
        System.out.println(time_after_max);
        long total_max = time_after_max - time_before_max;
        System.out.println("time token to get max number "+total_max);
        System.out.println("time before min");
        long time_before_min = System.currentTimeMillis();
        System.out.println("the min number is "+m.min(myArray));
        long time_after_min = System.currentTimeMillis();
        System.out.println("time ater min");
        long total_min =  time_after_min - time_before_min;
        System.out.println("time token to get min number "+total_min);
        System.out.println("The index of number in search: "+m.searchNum(myArray, num));
        
}

}