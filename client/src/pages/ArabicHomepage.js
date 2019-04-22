import React, { Component } from "react";
import Navbar from "../components/layout/Navbar";
import img from "../components/Assets/bg.jpeg.jpg";
import img2 from "../components/Assets/st.jpeg.jpg";
import Carousel from "../components/Carousel";
import "../styles/styles.css";
import "bootstrap/dist/css/bootstrap.css";
import {
  CountryDropdown,
  RegionDropdown,
  CountryRegionData
} from "react-country-region-selector";

class ArabicHomepage extends Component {
  constructor(props) {
    super(props);
    this.state = { country: "", region: "" };
  }
  render() {
    return (
      <React.Fragment>
        <div className="container-fluid no-padding">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
              <Carousel />
              {/*<img src={img} className="img-fluid center-block" alt="hi" />*/}
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row jumbotron">
            <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9 col-xl-10">
              <p className="lead">
                هذه اللافتة سيتم استخدامها لعرض المعلومات التي سيهتم المستثمر
                بالمعرفة عنها اكثر
              </p>
              <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-2">
                <a href="https://www.gafi.gov.eg/Arabic/Pages/default.aspx">
                  {" "}
                  <button
                    type="button"
                    className="btn btn-outline-secondary btn-lg"
                  >
                    اعرف اكثر
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row welcome text-center">
            <div className="col-12">
              <h1 className="display-4">سوق أفريقيا الأكثر ازدهارا</h1>
            </div>
            <div className="col-12">
              <p className="lead text-center">
                أمة لديها الكثير من الموارد وعقلية الفوز ، خيارك المثالي
                للاستثمار
              </p>
            </div>
            <hr className="my-4" />
          </div>
        </div>

        <div className="container-fluid padding">
          <div className="row text-center padding">
            <div className="col-xs-12 col-sm-6 col-md-4">
              <i className="material-icons md-48">account_balance</i>
              <h3>وزارة التجارة</h3>
              <p>تشجيع الاستثمار في مصر</p>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4">
              <i className="material-icons md-48">account_balance</i>
              <h3>البنك المركزي المصري</h3>
              <p>النمو المستقر والمطرد هو مفتاح مستقبلنا</p>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4">
              <i className="material-icons md-48">account_balance</i>
              <h3>الهيئة العامة للاستثمار</h3>
              <p>مرحبا بكم في أرض الفراعنة</p>
            </div>
          </div>
          <hr className="my-4" />
        </div>
        <div className="container-fluid padding">
          <div className="row padding">
            <div className="col-lg-6">
              <h2>إذا كنت تستثمر في مصر ...</h2>
              <p>
                ·مرونة الاقتصاد المصري قادرة على التغلب عليها
                                التحديات الاقتصادية كما فعلت في الأزمة المالية
                لعام 2008 ، و                 سوف يرى المستثمرون على المدى
                الطويل العديد من الفرص.
              </p>
              <p>
                {" "}
                ·بدأت مصر تحولها إلى مستقر وديمقراطي                 والاقتصاد
                الحديث ، حيث أرباح النمو والازدهار                 سيتم مشاركتها
                من قبل جميع الذين شاركوا في تحقيقها.
              </p>
              <p>
                {" "}
                ·قدرة الاقتصاد المصري على نشر اقتصادي حقيقي إيجابي
                                معدلات النمو وسط الانكماش الاقتصادي العالمي
                وكذلك خلال                 الاضطرابات السياسية التي سادت في
                2011-2013 تشير إلى كيف                 نشاط اقتصادي مرن في مصر.
              </p>
              <br />
              <a
                href="https://www.gafi.gov.eg/Arabic/whyegypt/pages/reasonstoinvestinegypt.aspx"
                className="btn btn-primary"
              >
                اقرأ المزيد
              </a>
            </div>
            <div className="col-lg-6">
              <img src={img2} className="img-fluid" alt="hi" />
            </div>
          </div>
        </div>
        <hr className="my-4" />
      </React.Fragment>
    );
  }
}

export default ArabicHomepage;
