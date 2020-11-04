import React from 'react';

class Form3 extends React.Component {
  constructor() {
    super();
    this.state = {
      credit: "",
      date: ""
    };
  }

  render() {
    return /*#__PURE__*/React.createElement("form", {
      id: "form1"
    }, /*#__PURE__*/React.createElement("label", {
      for: "name"
    }, "credit card Number:"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("input", {
      type: "text",
      id: "credit",
      name: "credit"
    }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("label", {
      for: "expiry date"
    }, "expiry date:"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("input", {
      type: "date",
      id: "date",
      name: "date"
    }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("input", {
      type: "submit",
      value: "submit"
    }));
  }

}

export default Form3;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9mb3JtMy5qc3giXSwibmFtZXMiOlsiUmVhY3QiLCJGb3JtMyIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwic3RhdGUiLCJjcmVkaXQiLCJkYXRlIiwicmVuZGVyIl0sIm1hcHBpbmdzIjoiQUFBQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCOztBQUdBLE1BQU1DLEtBQU4sU0FBb0JELEtBQUssQ0FBQ0UsU0FBMUIsQ0FBb0M7QUFDaENDLEVBQUFBLFdBQVcsR0FBRztBQUNWO0FBQ0EsU0FBS0MsS0FBTCxHQUFhO0FBQ1RDLE1BQUFBLE1BQU0sRUFBRSxFQURDO0FBRVRDLE1BQUFBLElBQUksRUFBRTtBQUZHLEtBQWI7QUFJSDs7QUFJREMsRUFBQUEsTUFBTSxHQUFHO0FBQ0wsd0JBQ0k7QUFBTSxNQUFBLEVBQUUsRUFBQztBQUFULG9CQUNJO0FBQU8sTUFBQSxHQUFHLEVBQUM7QUFBWCw2QkFESixlQUNpRCwrQkFEakQsZUFFSTtBQUFPLE1BQUEsSUFBSSxFQUFDLE1BQVo7QUFBbUIsTUFBQSxFQUFFLEVBQUMsUUFBdEI7QUFBK0IsTUFBQSxJQUFJLEVBQUM7QUFBcEMsTUFGSixlQUVtRCwrQkFGbkQsZUFFNEQsK0JBRjVELGVBR0k7QUFBTyxNQUFBLEdBQUcsRUFBQztBQUFYLHNCQUhKLGVBR2lELCtCQUhqRCxlQUlJO0FBQU8sTUFBQSxJQUFJLEVBQUMsTUFBWjtBQUFtQixNQUFBLEVBQUUsRUFBQyxNQUF0QjtBQUE2QixNQUFBLElBQUksRUFBQztBQUFsQyxNQUpKLGVBSStDLCtCQUovQyxlQUl3RCwrQkFKeEQsZUFLSTtBQUFPLE1BQUEsSUFBSSxFQUFDLFFBQVo7QUFBcUIsTUFBQSxLQUFLLEVBQUM7QUFBM0IsTUFMSixDQURKO0FBU0g7O0FBckIrQjs7QUF3QnBDLGVBQWVOLEtBQWYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5cclxuY2xhc3MgRm9ybTMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBjcmVkaXQ6IFwiXCIsXHJcbiAgICAgICAgICAgIGRhdGU6IFwiXCIsXHJcbiAgICAgICAgfTtcclxuICAgIH07XHJcblxyXG5cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGZvcm0gaWQ9XCJmb3JtMVwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIm5hbWVcIj5jcmVkaXQgY2FyZCBOdW1iZXI6PC9sYWJlbD48YnI+PC9icj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiY3JlZGl0XCIgbmFtZT1cImNyZWRpdFwiIC8+PGJyPjwvYnI+PGJyPjwvYnI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZXhwaXJ5IGRhdGVcIj5leHBpcnkgZGF0ZTo8L2xhYmVsPjxicj48L2JyPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJkYXRlXCIgaWQ9XCJkYXRlXCIgbmFtZT1cImRhdGVcIiAvPjxicj48L2JyPjxicj48L2JyPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cInN1Ym1pdFwiIC8+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvcm0zOyJdfQ==