# react-native-searchable-country-dropdown
A simple react native component that allows you to search and pick a country from the dropdown. The dropdown then returns the country code of the item selected from the dropdown.

# Install
    npm install react-native-searchable-country-dropdown

# Demo
### Demo can be found in the example folder

![Demo](https://media.giphy.com/media/jPAxKFTFUzvcIWyj6M/giphy.gif)

# Props
### **countrySelect**
Accepts a function that takes in the selected country code

### **toggleParentScroll**
Accepts a function to toggle parent scroll

### **error**
Accepts error messages in string

### **overwrites**
Accepts an array to overwrite existing names for country 

Defaults to [{code: 'TW', name: 'Taiwan'}], 

### **defaultCountry**
Accepts the country code of the default country you wish to prefill the dropdown with 

### **dropdownOffsetX** 
Accepts a number used to offset the dropdown menu in X direction

Use this only if the menu is not perfectly align to the bottom of your TextInput field

### **dropdownOffsetY**
Accepts a number used to offset the dropdown menu in Y direction

Use this only if the menu is not perfectly align to the bottom of your TextInput field

### **fontFamily**
Accepts a string for the fontFamily of the dropdown menu and TextInput field

### **fontSizeOffset**
Accepts a number used to scale the fontSize up or down

### **textColor**
Accepts a hexadecimal/rgba string representation of the color for the texts

Defaults to "black"


# Usage
    import CountrySelectDropdown from "react-native-searchable-country-dropdown"

        <CountrySelectDropdown
            countrySelect={setCountryCode}
            error={errorMsg}
            fontFamily={"Nunito-Regular"}
            textColor={"#f3f3f3"}
        />

# Dependencies
This package depends on 2 other packages, you can learn more about them here:
#### country-list
https://www.npmjs.com/package/country-list

#### react-native-flags
https://www.npmjs.com/package/react-native-flags