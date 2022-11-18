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
              title={item.name}
              bordered={false}
              key={index}
              style={{
                width: 300,
              }}
            >
              <p>{item.description}</p>
            </Card>
          </div>
        ))}
    </>
  );
};
export default Mails;
