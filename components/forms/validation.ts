import * as Yup from "yup";
const RetailSignupSchema = Yup.object().shape({
  name: Yup.string()
    .max(50, "من فضلك قم بكتابة اسم صحيح")
    .required("هذا الحقل مطلوب"),
  email: Yup.string().email("هذا الحساب غير صحيح").required("هذا الحقل مطلوب"),
  phone: Yup.string()
    .matches(/^(010|011|012|015)\d{8}$/, "من فضلك أدخل رقم هاتف صحيح")
    .required("هذا الحقل مطلوب"),
  address: Yup.string()
    .min(25, "من فضلك قم بأدخال عنوان صحيح")
    .required("هذا الحقل مطلوب"),
  password: Yup.string()
    .min(8, "يجب أن لا تقل كلمة المرور عن 8 حروف")
    .required("هذا الحقل مطلوب"),
});

const WholesomeSchema = Yup.object().shape({
  name: Yup.string()
    .max(50, "من فضلك قم بكتابة اسم صحيح")
    .required("هذا الحقل مطلوب"),
  email: Yup.string().email("هذا الحساب غير صحيح").required("هذا الحقل مطلوب"),
  phone: Yup.string()
    .matches(/^(010|011|012|015)\d{8}$/, "من فضلك أدخل رقم هاتف صحيح")
    .required("هذا الحقل مطلوب"),
  address: Yup.string()
    .min(25, "من فضلك قم بأدخال عنوان صحيح")
    .required("هذا الحقل مطلوب"),
  password: Yup.string()
    .min(8, "يجب أن لا تقل كلمة المرور عن 8 حروف")
    .required("هذا الحقل مطلوب"),
  banner: Yup.mixed().required("هذا الحقل مطلوب"),
});

const LoginSchema = Yup.object().shape({
  email: Yup.string().required("من فضلك قم بأدخال الحساب"),
  password: Yup.string().required("من فضلك قم بأدخال كلمة المرور"),
});
export { RetailSignupSchema, WholesomeSchema, LoginSchema };
