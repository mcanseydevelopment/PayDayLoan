/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef } from "react";
interface FormField {
  fieldName: string;
  fieldValue: string | string[];
}

const FormDataHandler = () => {
  const submittedRef = useRef(false);

  useEffect(() => {
    const checkAndStoreData = async () => {
      if (submittedRef.current) return;

      const sessionData = sessionStorage.getItem("JSF-content");
      if (sessionData) {
        try {
          const parsedData = JSON.parse(sessionData);
          const fieldsBeforeLogin = parsedData.__SYSTEM__fieldsBeforeLogin as FormField[];

          // Check if current page is "bg-unsecured-debt"
          if (parsedData.__SYSTEM__currentPage === "bg-unsecured-debt" && fieldsBeforeLogin?.length > 0) {
            const formData = fieldsBeforeLogin.reduce((acc, field) => {
              const fieldNameLower = field.fieldName.toLowerCase();

              // Initialize objects if they don't exist
              acc.loanDetails = acc.loanDetails || {};
              acc.personalInfo = acc.personalInfo || {};
              acc.address = acc.address || {};
              acc.employment = acc.employment || {};
              acc.banking = acc.banking || {};

              if (["requestedamount", "credit", "loanpurpose"].includes(fieldNameLower)) {
                acc.loanDetails[fieldNameLower] = field.fieldValue;
              } else if (["firstname", "lastname", "email", "phonehome", "ssn", "dob", "driverslicense", "driverslicensestate"].includes(fieldNameLower)) {
                acc.personalInfo[fieldNameLower] = field.fieldValue;
              } else if (["address1", "zipcode"].includes(fieldNameLower)) {
                acc.address[fieldNameLower] = field.fieldValue;
              } else if (["incometype", "employername", "monthlyincome", "payfrequency", "paydate1", "directdeposit"].includes(fieldNameLower)) {
                acc.employment[fieldNameLower] = field.fieldValue;
              } else if (["bankaccounttype", "bankaba", "bankaccountnumber"].includes(fieldNameLower)) {
                acc.banking[fieldNameLower] = field.fieldValue;
              }
              return acc;
            }, {} as any);

            console.log("Sending form data:", formData);

            const response = await fetch("https://payday-loan-lovat.vercel.app/api/formdata", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ formData }),
            });

            const result = await response.json();
            console.log("Server response:", result);

            if (result.success) {
              console.log("Data saved successfully");
              submittedRef.current = true;
              clearInterval(interval);
              observer.disconnect();
            } else if (response.status === 409) {
              console.log("Duplicate entry detected - form already submitted");
              submittedRef.current = true;
              clearInterval(interval);
              observer.disconnect();
            }
          }
        } catch (error) {
          console.error("Error processing form data:", error);
        }
      }
    };

    const observer = new MutationObserver(() => {
      checkAndStoreData();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      characterData: true,
    });

    const interval = setInterval(checkAndStoreData, 3000);

    return () => {
      clearInterval(interval);
      observer.disconnect();
    };
  }, []);

  return null;
};

export default FormDataHandler;