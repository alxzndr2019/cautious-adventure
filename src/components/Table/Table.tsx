import React, { FunctionComponent, useState } from "react";
import { Table, Divider, Tag, Select, Space } from "antd";
import styles from "./Table.module.scss";

interface TableProps {}

const CustomTable: FunctionComponent<TableProps> = () => {
  interface Column {
    title: string;
    dataIndex?: string;
    key: string;
    render?: any;
  }
  interface Order {
    key: String;
    date: String;
    category: String;
    order_id: String;
    amount: String;
    status: String;
    payment: String;
    assignee: String;
    progress: String;
  }
  const data = [
    {
      key: "1",
      date: "20-03-2023",
      category: "Food",
      order_id: "4564784749uur",
      amount: "$200",
      status: "Pending",
      payment: "Paid",
      assignee: "Ifeanyi Agochie",
      progress: "Pickup",
    },
    {
      key: "1",
      date: "20-03-2023",
      category: "Food",
      order_id: "CHFFUURUU-445",
      amount: "$200",
      status: "Pending",
      payment: "Paid",
      assignee: "Ifeanyi Agochie",
      progress: "Pickup",
    },
    {
      key: "1",
      date: "20-03-2023",
      category: "Food",
      order_id: "CHFFUURUU-445",
      amount: "$200",
      status: "Pending",
      payment: "Paid",
      assignee: "Ifeanyi Agochie",
      progress: "Pickup",
    },
    {
      key: "1",
      date: "20-03-2023",
      category: "Food",
      order_id: "CHFFUURUU-445",
      amount: "$200",
      status: "Pending",
      payment: "Pending",
      assignee: "Ifeanyi Agochie",
      progress: "Pickup",
    },
    {
      key: "1",
      date: "20-03-2023",
      category: "Food",
      order_id: "CHFFUURUU-445",
      amount: "$200",
      status: "Pending",
      payment: "Paid",
      assignee: "Ifeanyi Agochie",
      progress: "Pickup",
    },
    {
      key: "1",
      date: "20-03-2023",
      category: "Food",
      order_id: "CHFFUURUU-445",
      amount: "$200",
      status: "Active",
      payment: "Pending",
      assignee: "Ifeanyi Agochie",
      progress: "Pickup",
    },
    {
      key: "1",
      date: "20-03-2023",
      category: "Food",
      order_id: "CHFFUURUU-445",
      amount: "$200",
      status: "Cancelled",
      payment: "Paid",
      assignee: "Ifeanyi Agochie",
      progress: "Pickup",
    },
    {
      key: "1",
      date: "20-03-2023",
      category: "Food",
      order_id: "CHFFUURUU-445",
      amount: "$200",
      status: "Pending",
      payment: "Paid",
      assignee: "Ifeanyi Agochie",
      progress: "Pickup",
    },
    {
      key: "1",
      date: "20-03-2023",
      category: "Food",
      order_id: "CHFFUURUU-445",
      amount: "$200",
      status: "Pending",
      payment: "Failed",
      assignee: "Ifeanyi Agochie",
      progress: "Pickup",
    },
    {
      key: "1",
      date: "20-03-2023",
      category: "Food",
      order_id: "CHFFUURUU-445",
      amount: "$200",
      status: "Pending",
      payment: "Paid",
      assignee: "Ifeanyi Agochie",
      progress: "Pickup",
    },
    {
      key: "1",
      date: "20-03-2023",
      category: "Food",
      order_id: "CHFFUURUU-445",
      amount: "$200",
      status: "Pending",
      payment: "Paid",
      assignee: "Ifeanyi Agochie",
      progress: "Pickup",
    },
    {
      key: "1",
      date: "20-03-2023",
      category: "Food",
      order_id: "CHFFUURUU-445",
      amount: "$200",
      status: "Pending",
      payment: "Paid",
      assignee: "Ifeanyi Agochie",
      progress: "Pickup",
    },
    {
      key: "1",
      date: "20-03-2023",
      category: "Food",
      order_id: "CHFFUURUU-445",
      amount: "$200",
      status: "Pending",
      payment: "Paid",
      assignee: "Ifeanyi Agochie",
      progress: "Pickup",
    },
    {
      key: "1",
      date: "20-03-2023",
      category: "Food",
      order_id: "CHFFUURUU-445",
      amount: "$200",
      status: "Pending",
      payment: "Paid",
      assignee: "Ifeanyi Agochie",
      progress: "Pickup",
    },
    {
      key: "1",
      date: "20-03-2023",
      category: "Food",
      order_id: "D247276267467",
      amount: "$200",
      status: "Pending",
      payment: "Paid",
      assignee: "Ifeanyi Agochie",
      progress: "Pickup",
    },
  ];

  const [orders, setOrders] = useState<Order[]>(data);
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  const searchByOrderId = (orderId: string) => {
    // const result = data.filter((item) => item.order_id === orderId);
    const result = data.filter((item) => {
      return Object.values(item)
        .join("")
        .toLowerCase()
        .includes(orderId.toLowerCase());
    });
    if (result) {
      setOrders(result);
    } else {
      setOrders(data);
    }

    console.log(result);
  };
  const columns: Column[] = [
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      render: (text: any) => <a>{text}</a>,
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "Order ID",
      dataIndex: "order_id",
      key: "order_id",
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
    },
    {
      title: "Order Status",
      dataIndex: "status",
      key: "status",
      render: (text: any, record: any) => (
        <span>
          {record.status === "Completed" && <Tag color={"green"}>{text}</Tag>}
          {record.status === "Pending" && <Tag color={"yellow"}>{text}</Tag>}
          {record.status === "Cancelled" && <Tag color={"red"}>{text}</Tag>}
          {record.status === "Active" && <Tag color={"blue"}>{text}</Tag>}
        </span>
      ),
    },
    {
      title: "Payment",
      dataIndex: "payment",
      key: "payment",
      render: (text: any, record: any) => (
        <span>
          {record.payment === "Paid" && (
            <Tag
              onClick={() => alert(`This transaction has being paid for`)}
              color={"green"}
            >
              {text}
            </Tag>
          )}
          {record.payment === "Pending" && (
            <Tag
              onClick={() => alert(`This transaction is pending`)}
              color={"yellow"}
            >
              {text}
            </Tag>
          )}
          {record.payment === "Failed" && (
            <Tag onClick={() => alert(`This transaction failed`)} color={"red"}>
              {text}
            </Tag>
          )}
        </span>
      ),
    },
    {
      title: "Assignee",
      dataIndex: "assignee",
      key: "assignee",
      render: (text: any, record: any) => (
        <span>
          <Select
            defaultValue={record.assignee}
            style={{ width: 200 }}
            onChange={handleChange}
            options={[
              { value: "Unassigned", label: "Unassigned" },
              { value: "Emmanuel Augustine", label: "Emmanuel Augustine" },
              { value: "Temitope Salawu", label: "Temitope Salawu" },
              {
                value: "Ifeanyi Agochie",
                label: "Ifeanyi Agochie",
                disabled: true,
              },
            ]}
          />
        </span>
      ),
    },
    {
      title: "Progress",
      dataIndex: "progress",
      key: "progress",
      render: (text: any, record: any) => (
        <span>
          <Select
            defaultValue={record.progress}
            style={{ width: 200 }}
            onChange={handleChange}
            options={[
              { value: "Pickup", label: "Pickup" },
              { value: "About to move", label: "About to move" },
              { value: "On the move", label: "On the move" },
              { value: "At the location", label: "At the location" },
            ]}
          />
        </span>
      ),
    },
  ];

  return (
    <div className={styles.container}>
      <input
        placeholder="Search deliveries with Order ID"
        onChange={(e) => searchByOrderId(e.target.value)}
      />
      <Table columns={columns} dataSource={orders} />
    </div>
  );
};

export default CustomTable;
