import React from 'react';

class Form2 extends React.Component {
  constructor() {
    super();
    this.state = {
      line1: "",
      line2: "",
      city: "",
      state: "",
      code: ""
    };
  }

  render() {
    return /*#__PURE__*/React.createElement("form", {
      id: "form1"
    }, /*#__PURE__*/React.createElement("label", {
      for: "line1"
    }, "line 1:"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("input", {
      type: "text",
      id: "line1",
      name: "line1"
    }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("label", {
      for: "line2"
    }, "line 2:"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("input", {
      type: "text",
      id: "line2",
      name: "line2"
    }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("label", {
      for: "city"
    }, "city:"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("input", {
      type: "text",
      id: "city",
      name: "city"
    }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("label", {
      for: "state"
    }, "state:"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("input", {
      type: "text",
      id: "state",
      name: "state"
    }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("label", {
      for: "code"
    }, "code:"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("input", {
      type: "text",
      id: "code",
      name: "code"
    }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("input", {
      type: "submit",
      value: "submit"
    }));
  }

}

export default Form2;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9mb3JtMi5qc3giXSwibmFtZXMiOlsiUmVhY3QiLCJGb3JtMiIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwic3RhdGUiLCJsaW5lMSIsImxpbmUyIiwiY2l0eSIsImNvZGUiLCJyZW5kZXIiXSwibWFwcGluZ3MiOiJBQUFBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7O0FBR0EsTUFBTUMsS0FBTixTQUFvQkQsS0FBSyxDQUFDRSxTQUExQixDQUFvQztBQUNoQ0MsRUFBQUEsV0FBVyxHQUFHO0FBQ1Y7QUFDQSxTQUFLQyxLQUFMLEdBQWE7QUFDVEMsTUFBQUEsS0FBSyxFQUFFLEVBREU7QUFFVEMsTUFBQUEsS0FBSyxFQUFFLEVBRkU7QUFHVEMsTUFBQUEsSUFBSSxFQUFFLEVBSEc7QUFJVEgsTUFBQUEsS0FBSyxFQUFFLEVBSkU7QUFLVEksTUFBQUEsSUFBSSxFQUFFO0FBTEcsS0FBYjtBQU9IOztBQUlEQyxFQUFBQSxNQUFNLEdBQUc7QUFDTCx3QkFDSTtBQUFNLE1BQUEsRUFBRSxFQUFDO0FBQVQsb0JBQ0k7QUFBTyxNQUFBLEdBQUcsRUFBQztBQUFYLGlCQURKLGVBQ3NDLCtCQUR0QyxlQUVJO0FBQU8sTUFBQSxJQUFJLEVBQUMsTUFBWjtBQUFtQixNQUFBLEVBQUUsRUFBQyxPQUF0QjtBQUE4QixNQUFBLElBQUksRUFBQztBQUFuQyxNQUZKLGVBRWlELCtCQUZqRCxlQUdJO0FBQU8sTUFBQSxHQUFHLEVBQUM7QUFBWCxpQkFISixlQUdzQywrQkFIdEMsZUFJSTtBQUFPLE1BQUEsSUFBSSxFQUFDLE1BQVo7QUFBbUIsTUFBQSxFQUFFLEVBQUMsT0FBdEI7QUFBOEIsTUFBQSxJQUFJLEVBQUM7QUFBbkMsTUFKSixlQUlpRCwrQkFKakQsZUFLSTtBQUFPLE1BQUEsR0FBRyxFQUFDO0FBQVgsZUFMSixlQUttQywrQkFMbkMsZUFNSTtBQUFPLE1BQUEsSUFBSSxFQUFDLE1BQVo7QUFBbUIsTUFBQSxFQUFFLEVBQUMsTUFBdEI7QUFBNkIsTUFBQSxJQUFJLEVBQUM7QUFBbEMsTUFOSixlQU0rQywrQkFOL0MsZUFPSTtBQUFPLE1BQUEsR0FBRyxFQUFDO0FBQVgsZ0JBUEosZUFPcUMsK0JBUHJDLGVBUUk7QUFBTyxNQUFBLElBQUksRUFBQyxNQUFaO0FBQW1CLE1BQUEsRUFBRSxFQUFDLE9BQXRCO0FBQThCLE1BQUEsSUFBSSxFQUFDO0FBQW5DLE1BUkosZUFRaUQsK0JBUmpELGVBU0k7QUFBTyxNQUFBLEdBQUcsRUFBQztBQUFYLGVBVEosZUFTbUMsK0JBVG5DLGVBVUk7QUFBTyxNQUFBLElBQUksRUFBQyxNQUFaO0FBQW1CLE1BQUEsRUFBRSxFQUFDLE1BQXRCO0FBQTZCLE1BQUEsSUFBSSxFQUFDO0FBQWxDLE1BVkosZUFVK0MsK0JBVi9DLGVBV0k7QUFBTyxNQUFBLElBQUksRUFBQyxRQUFaO0FBQXFCLE1BQUEsS0FBSyxFQUFDO0FBQTNCLE1BWEosQ0FESjtBQWVIOztBQTlCK0I7O0FBaUNwQyxlQUFlUixLQUFmIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuXHJcbmNsYXNzIEZvcm0yIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgbGluZTE6IFwiXCIsXHJcbiAgICAgICAgICAgIGxpbmUyOiBcIlwiLFxyXG4gICAgICAgICAgICBjaXR5OiBcIlwiLFxyXG4gICAgICAgICAgICBzdGF0ZTogXCJcIixcclxuICAgICAgICAgICAgY29kZTogXCJcIlxyXG4gICAgICAgIH07XHJcbiAgICB9O1xyXG5cclxuXHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxmb3JtIGlkPVwiZm9ybTFcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJsaW5lMVwiPmxpbmUgMTo8L2xhYmVsPjxicj48L2JyPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJsaW5lMVwiIG5hbWU9XCJsaW5lMVwiIC8+PGJyPjwvYnI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwibGluZTJcIj5saW5lIDI6PC9sYWJlbD48YnI+PC9icj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwibGluZTJcIiBuYW1lPVwibGluZTJcIiAvPjxicj48L2JyPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImNpdHlcIj5jaXR5OjwvbGFiZWw+PGJyPjwvYnI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cImNpdHlcIiBuYW1lPVwiY2l0eVwiIC8+PGJyPjwvYnI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwic3RhdGVcIj5zdGF0ZTo8L2xhYmVsPjxicj48L2JyPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJzdGF0ZVwiIG5hbWU9XCJzdGF0ZVwiIC8+PGJyPjwvYnI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiY29kZVwiPmNvZGU6PC9sYWJlbD48YnI+PC9icj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiY29kZVwiIG5hbWU9XCJjb2RlXCIgLz48YnI+PC9icj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJzdWJtaXRcIiAvPlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb3JtMjsiXX0=