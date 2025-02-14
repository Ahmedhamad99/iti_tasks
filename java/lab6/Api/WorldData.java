import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.*;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class WorldData {

    public static List<Country> readAllCountries(String filePath) throws IOException {

        try (Stream<String> lines = Files.lines(Paths.get(filePath))) {
        
            return lines.skip(1)  
                        .map(line -> line.split(","))
                        .filter(values -> values.length >= 7)  
                        .map(values -> {
                            try {
                                return new Country(
                                    values[0], 
                                    values[1], 
                                    values[2], 
                                    Double.parseDouble(values[3]), 
                                    Integer.parseInt(values[4]),   
                                    Double.parseDouble(values[5]), 
                                    values[6].trim().isEmpty() ? 0 : (values[6].contains(".") ? 
                                        (int) Double.parseDouble(values[6]) : Integer.parseInt(values[6]))
                                );
                            } catch (NumberFormatException e) {
                                System.err.println("\nError parsing number in line" + Arrays.toString(values));
                                return null;
                            }
                        })
                        .filter(Objects::nonNull)  
                        .collect(Collectors.toList());
        }
    }

    public static List<City> readAllCities(String filePath) throws IOException {
        try (Stream<String> lines = Files.lines(Paths.get(filePath))) {
            return lines.skip(1)
                        .map(line -> line.split(","))
                        .filter(values -> values.length >= 4)
                        .map(values -> {
                            try {
                                return new City(
                                    Integer.parseInt(values[0]), 
                                    values[1], 
                                    Integer.parseInt(values[2]), 
                                    values[3]
                                );
                            } catch (NumberFormatException e) {
                                System.err.println("\nError parsing number in line" + Arrays.toString(values));
                                return null;
                            }
                        })
                        .filter(Objects::nonNull)
                        .collect(Collectors.toList());
        }
    }

    public static void main(String[] args) throws IOException {
        List<Country> countries = readAllCountries(args[0]);
        List<City> cities = readAllCities(args[1]);

        
        Map<String, City> highestCityByCountry = cities.stream()
            .collect(Collectors.toMap(
                City::getCountryCode,
                city -> city,
                (c1, c2) -> c1.getPopulation() > c2.getPopulation() ? c1 : c2
            ));

        System.out.println("Highest Populated City of Each Country: ");
        highestCityByCountry.forEach((country, city) ->
            System.out.println("|| " + country + " || ==> " + city.getName() + " ||"));

        
        Map<String, Country> highestPopulatedCountryByContinent = countries.stream()
            .collect(Collectors.toMap(
                Country::getContinent,
                country -> country,
                (c1, c2) -> c1.getPopulation() > c2.getPopulation() ? c1 : c2
            ));

        System.out.println("\n The Most Populated Country for Each Continent::");
        highestPopulatedCountryByContinent.forEach((continent, country) ->
            System.out.println("|| " + continent + " || ==> " + country.getName() + " ||"));


        Map<Integer, City> cityMap = cities.stream()
            .collect(Collectors.toMap(City::getId, city -> city));

        City highestCapital = countries.stream()
            .map(country -> cityMap.get(country.getCapital()))
            .filter(Objects::nonNull)
            .max(Comparator.comparingInt(City::getPopulation))
            .orElse(null);

        System.out.println("\n The Highest Populated Capital City in the world is:");
        if (highestCapital != null) {
            System.out.println("|| " + highestCapital.getName() + " ||");
        }
    }
}
