import React from 'react';

class Form1 extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: ""
    };
  }

  render() {
    return /*#__PURE__*/React.createElement("form", {
      id: "form1"
    }, /*#__PURE__*/React.createElement("label", {
      for: "name"
    }, "name:"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("input", {
      type: "text",
      id: "name",
      name: "name"
    }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("label", {
      for: "email"
    }, "email:"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("input", {
      type: "email",
      id: "email",
      name: "email"
    }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("label", {
      for: "password"
    }, "password:"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("input", {
      type: "password",
      id: "password",
      name: "password"
    }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("input", {
      type: "submit",
      value: "submit"
    }));
  }

}

export default Form1;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9mb3JtMS5qc3giXSwibmFtZXMiOlsiUmVhY3QiLCJGb3JtMSIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwic3RhdGUiLCJuYW1lIiwiZW1haWwiLCJwYXNzd29yZCIsInJlbmRlciJdLCJtYXBwaW5ncyI6IkFBQUEsT0FBT0EsS0FBUCxNQUFrQixPQUFsQjs7QUFHQSxNQUFNQyxLQUFOLFNBQW9CRCxLQUFLLENBQUNFLFNBQTFCLENBQW9DO0FBQ2hDQyxFQUFBQSxXQUFXLEdBQUc7QUFDVjtBQUNBLFNBQUtDLEtBQUwsR0FBYTtBQUNUQyxNQUFBQSxJQUFJLEVBQUUsRUFERztBQUVUQyxNQUFBQSxLQUFLLEVBQUUsRUFGRTtBQUdUQyxNQUFBQSxRQUFRLEVBQUU7QUFIRCxLQUFiO0FBS0g7O0FBSURDLEVBQUFBLE1BQU0sR0FBRztBQUNMLHdCQUNJO0FBQU0sTUFBQSxFQUFFLEVBQUM7QUFBVCxvQkFDSTtBQUFPLE1BQUEsR0FBRyxFQUFDO0FBQVgsZUFESixlQUNtQywrQkFEbkMsZUFFSTtBQUFPLE1BQUEsSUFBSSxFQUFDLE1BQVo7QUFBbUIsTUFBQSxFQUFFLEVBQUMsTUFBdEI7QUFBNkIsTUFBQSxJQUFJLEVBQUM7QUFBbEMsTUFGSixlQUUrQywrQkFGL0MsZUFFd0QsK0JBRnhELGVBR0k7QUFBTyxNQUFBLEdBQUcsRUFBQztBQUFYLGdCQUhKLGVBR3FDLCtCQUhyQyxlQUlJO0FBQU8sTUFBQSxJQUFJLEVBQUMsT0FBWjtBQUFvQixNQUFBLEVBQUUsRUFBQyxPQUF2QjtBQUErQixNQUFBLElBQUksRUFBQztBQUFwQyxNQUpKLGVBSWtELCtCQUpsRCxlQUkyRCwrQkFKM0QsZUFNSTtBQUFPLE1BQUEsR0FBRyxFQUFDO0FBQVgsbUJBTkosZUFNMkMsK0JBTjNDLGVBT0k7QUFBTyxNQUFBLElBQUksRUFBQyxVQUFaO0FBQXVCLE1BQUEsRUFBRSxFQUFDLFVBQTFCO0FBQXFDLE1BQUEsSUFBSSxFQUFDO0FBQTFDLE1BUEosZUFPMkQsK0JBUDNELGVBT29FLCtCQVBwRSxlQVFJO0FBQU8sTUFBQSxJQUFJLEVBQUMsUUFBWjtBQUFxQixNQUFBLEtBQUssRUFBQztBQUEzQixNQVJKLENBREo7QUFZSDs7QUF6QitCOztBQTRCcEMsZUFBZVAsS0FBZiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcblxyXG5jbGFzcyBGb3JtMSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiXCIsXHJcbiAgICAgICAgICAgIGVtYWlsOiBcIlwiLFxyXG4gICAgICAgICAgICBwYXNzd29yZDogXCJcIlxyXG4gICAgICAgIH07XHJcbiAgICB9O1xyXG5cclxuXHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxmb3JtIGlkPVwiZm9ybTFcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJuYW1lXCI+bmFtZTo8L2xhYmVsPjxicj48L2JyPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJuYW1lXCIgbmFtZT1cIm5hbWVcIiAvPjxicj48L2JyPjxicj48L2JyPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImVtYWlsXCI+ZW1haWw6PC9sYWJlbD48YnI+PC9icj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBpZD1cImVtYWlsXCIgbmFtZT1cImVtYWlsXCIgLz48YnI+PC9icj48YnI+PC9icj5cclxuXHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwicGFzc3dvcmRcIj5wYXNzd29yZDo8L2xhYmVsPjxicj48L2JyPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIGlkPVwicGFzc3dvcmRcIiBuYW1lPVwicGFzc3dvcmRcIiAvPjxicj48L2JyPjxicj48L2JyPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cInN1Ym1pdFwiIC8+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvcm0xOyJdfQ==