import { Badge, Space, Button, Table, message } from "antd";
import React, { useState, useEffect } from "react";
import { useGetAllContacts } from "../common/hooks/contacts/use-get-contacts";
import { services } from "../common/services/services";
import ReplyContactsDrawer from "../components/drawers/ReplyContactsDrawer";

const Contacts = () => {
  const columns = [
    {
      title: "status",
      dataIndex: "isRead",
      render: (text, record, index) =>
        record?.isRead ? (
          <Badge status="default" />
        ) : (
          <Badge status="processing" />
        ),
      width: "5%",
    },
    {
      title: "Email",
      dataIndex: "email",
      width: "20%",
    },
    {
      title: "Message",
      dataIndex: "message",
      width: "20%",
    },
    {
      title: "Contact Method",
      dataIndex: "contactMethod",
      width: "20%",
    },
    {
      title: "Created At",
      dataIndex: "createdAt",
      width: "20%",
    },
    {
      title: "",
      dataIndex: "",

      render: (text, record, index) => (
        <Button
          onClick={() => (setIsClickedContact(record), setIsOpenDrawer(true))}
        >
          Reply
        </Button>
      ),
      width: "15%",
    },
  ];

  const [tableParams, setTableParams] = useState({
    pagination: {
      current: 1,
      pageSize: 10,
    },
  });

  const handleTableChange = (pagination, filters, sorter) => {
    setTableParams({
      pagination,
      filters,
      ...sorter,
    });
  };

  const [isOpenDrawer, setIsOpenDrawer] = useState(false);
  const [clickedContact, setIsClickedContact] = useState(null);

  const contact = useGetAllContacts();

  useEffect(() => {}, [JSON.stringify(tableParams)]);

  const updateContactInfo = async (newValues) => {
    try {
      const response = await services.updateContactByID(
        newValues._id,
        newValues
      );
      if (response && !response.error) {
        setIsOpenDrawer(false);
        message.success("contact is updated ");
        contact.refetch();
      }
    } catch (error) {
      message.error("opps something went wrong !!");
    }
  };

  return (
    <>
      {contact.isFetched && (
        <Table
          columns={columns}
          rowKey={(record) => record["_id"]}
          dataSource={dummyData}
          pagination={{
            ...tableParams.pagination,
            position: ["bottomCenter"],
          }}
          onChange={handleTableChange}
        />
      )}
      {isOpenDrawer && (
        <ReplyContactsDrawer
          isOpenDrawer={isOpenDrawer}
          setIsOpenDrawer={setIsOpenDrawer}
          clickedContact={clickedContact}
          updateContactInfo={updateContactInfo}
        />
      )}
    </>
  );
};

export default Contacts;

//To-Do :: remove dummy data in here and from the table and put the contact?.data?.data["contact"].length != 0
const dummyData = [
  {
    _id: "6363d8eedfded1255da083c4",
    email: "email@email.com",
    message: "Second message",
    contactMethod: "phone",
    createdAt: "2022-11-03T15:06:22.399Z",
    updatedAt: "2022-11-03T15:06:22.399Z",
    __v: 0,
    isRead: false,
  },
  {
    _id: "6363d8f3dfded1255da083c6",
    email: "email@email.com",
    message: "Second message",
    contactMethod: "phone",
    createdAt: "2022-11-03T15:06:27.031Z",
    updatedAt: "2022-11-03T15:06:27.031Z",
    __v: 0,
    isRead: false,
  },
  {
    _id: "6363d905dfded1255da083c8",
    email: "email@email.com",
    phoneNumber: "+905443390800",
    message: "Second message",
    contactMethod: "phone",
    createdAt: "2022-11-03T15:06:45.047Z",
    updatedAt: "2022-11-03T15:06:45.047Z",
    __v: 0,
    isRead: false,
  },
  {
    _id: "636eeec317a6fc0c27574b12",
    email: "email@email.com",
    phoneNumber: "+905443390800",
    message: "Second message",
    contactMethod: "phone",
    createdAt: "2022-11-12T00:54:27.367Z",
    updatedAt: "2022-11-12T00:54:27.367Z",
    __v: 0,
    isRead: false,
  },
  {
    _id: "636ef58f8c1a3e8d0dd2154a",
    email: "email@email.com",
    phoneNumber: "+905443390800",
    message: "Second message",
    contactMethod: "phone",
    createdAt: "2022-11-12T01:23:27.350Z",
    updatedAt: "2022-11-12T01:23:27.350Z",
    __v: 0,
    isRead: false,
  },
  {
    _id: "636efe856c8187f3fbeccda7",
    email: "email@email.com",
    phoneNumber: "+905443390800",
    message: "Second message",
    contactMethod: "phone",
    createdAt: "2022-11-12T02:01:41.063Z",
    updatedAt: "2022-11-12T02:01:41.063Z",
    __v: 0,
    isRead: false,
  },
  {
    _id: "636fb0829247119a1d07ad44",
    email: "bedo@b.com",
    phoneNumber: "5443390800",
    message: "Bedirhan Celayir",
    contactMethod: "email",
    createdAt: "2022-11-12T14:41:06.980Z",
    updatedAt: "2022-11-12T14:41:06.980Z",
    __v: 0,
    isRead: false,
  },
  {
    _id: "636fb09e9247119a1d07ad46",
    email: "bedo@b.com",
    phoneNumber: "5443390800",
    message: "Bedirhan Celayir",
    contactMethod: "email",
    createdAt: "2022-11-12T14:41:34.398Z",
    updatedAt: "2022-11-12T14:41:34.398Z",
    __v: 0,
    isRead: false,
  },
  {
    _id: "636fb0f79247119a1d07ad48",
    email: "bedo@b.com",
    phoneNumber: "5443390800",
    message: "Bedirhan Celayir",
    contactMethod: "email",
    createdAt: "2022-11-12T14:43:03.749Z",
    updatedAt: "2022-11-12T14:43:03.749Z",
    __v: 0,
    isRead: false,
  },
  {
    _id: "636fff319247119a1d07ad59",
    email: "muhammet--aslan@hotmail.com",
    phoneNumber: "5437843536",
    message: "Ben burada ne arıyorum",
    contactMethod: "phone",
    createdAt: "2022-11-12T20:16:49.111Z",
    updatedAt: "2022-11-12T20:16:49.111Z",
    __v: 0,
    isRead: false,
  },
  {
    _id: "636fff469247119a1d07ad5b",
    email: "ASDASD@A.COM",
    phoneNumber: "5443390800",
    message: "Asdasdasdas",
    contactMethod: "phone",
    createdAt: "2022-11-12T20:17:10.848Z",
    updatedAt: "2022-11-12T20:17:10.848Z",
    __v: 0,
    isRead: false,
  },
  {
    _id: "637048d1370fb538c92905db",
    email: "a@a.com",
    phoneNumber: "123123123",
    message: "123123132",
    contactMethod: "phone",
    createdAt: "2022-11-13T01:30:57.184Z",
    updatedAt: "2022-11-13T01:30:57.184Z",
    __v: 0,
    isRead: false,
  },
  {
    _id: "6370e71cc284b03c05c5dd79",
    email: "bcelayir21@yandex.com",
    phoneNumber: "123123123123",
    message: "asdasdasd1231231",
    contactMethod: "email",
    createdAt: "2022-11-13T12:46:20.515Z",
    updatedAt: "2022-11-13T12:46:20.515Z",
    __v: 0,
    isRead: false,
  },
  {
    _id: "6370e71fc284b03c05c5dd7b",
    email: "bcelayir21@yandex.com",
    phoneNumber: "123123123123",
    message: "asdasdasd1231231",
    contactMethod: "email",
    createdAt: "2022-11-13T12:46:23.147Z",
    updatedAt: "2022-11-13T12:46:23.147Z",
    __v: 0,
    isRead: false,
  },
  {
    _id: "6370e720c284b03c05c5dd7d",
    email: "bcelayir21@yandex.com",
    phoneNumber: "123123123123",
    message: "asdasdasd1231231",
    contactMethod: "email",
    createdAt: "2022-11-13T12:46:24.153Z",
    updatedAt: "2022-11-13T12:46:24.153Z",
    __v: 0,
    isRead: false,
  },
  {
    _id: "6370e720c284b03c05c5dd7f",
    email: "bcelayir21@yandex.com",
    phoneNumber: "123123123123",
    message: "asdasdasd1231231",
    contactMethod: "email",
    createdAt: "2022-11-13T12:46:24.499Z",
    updatedAt: "2022-11-13T12:46:24.499Z",
    __v: 0,
    isRead: false,
  },
  {
    _id: "637235cbc284b03c05c5e2fc",
    email: "Bedir@a.com",
    phoneNumber: "123123123",
    message: "123123123123",
    contactMethod: "phone",
    createdAt: "2022-11-14T12:34:19.555Z",
    updatedAt: "2022-11-14T12:34:19.555Z",
    __v: 0,
    isRead: false,
  },
  {
    _id: "637235dec284b03c05c5e301",
    email: "Bedir@a.com",
    phoneNumber: "123123123",
    message: "123123123123",
    contactMethod: "phone",
    createdAt: "2022-11-14T12:34:38.071Z",
    updatedAt: "2022-11-14T12:34:38.071Z",
    __v: 0,
    isRead: false,
  },
];
