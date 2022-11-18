import React from "react";
import { useGetAllMailTemplates } from "../common/hooks/mailTemplates";
import { Card } from "antd";
const Mails = () => {
  const mailTemplates = useGetAllMailTemplates();
  console.log(mailTemplates?.data?.data);
  return (
    <>
      {mailTemplates.isFetched &&
        mailTemplates?.data?.data?.map((item, index) => (
          <div className="site-card-border-less-wrapper">
            <Card
              cover={
                <div
                  dangerouslySetInnerHTML={{ __html: item.templateSource }}
                />
              }
              hoverable={true}
              key={index}
              style={{
                width: 360,
              }}
            >
              <p>
                <strong>Title:</strong> {item.title}
              </p>
              <p>
                <strong>Name:</strong> {item.name}
              </p>
              <p>
                <strong>ID:</strong> {item._id}
              </p>
              <p>
                <strong>Template Path Name:</strong> {item.templatePathName}
              </p>
              <p>
                <strong>Description:</strong> {item.description}
              </p>
            </Card>
          </div>
        ))}
    </>
  );
};
export default Mails;
