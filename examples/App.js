import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CountrySelectDropdown from "react-native-searchable-country-dropdown"
import { Formik } from "formik";
import * as yup from "yup";

const CountrySchema = yup.object({
  country: yup.string().required(),
})

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Country</Text>
      <Formik
        initialValues={{country: "SG"}}
        validationSchema={CountrySchema}
        validateOnChange={true}
      >
      {(formikProps) => (
        <CountrySelectDropdown 
          countrySelect={formikProps.handleChange("country")}
          error={formikProps.errors.country}
        />
      )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    paddingTop: 50,
    padding: 20,
  },
});
