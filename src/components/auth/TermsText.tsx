import React, { useState, useEffect } from "react";
import Checkbox from "components/common/FormGroup/Checkbox";

const dummyText = [
  {
    termsId: 1,
    terms:
      "제 1조 (목적) 이 약관은 꼬순내 주식회사가 제공하는 꼬순네  서비스 및 제반한 서비스의 이용과 관련하여 회사와 회원과의 권리,의무 및 책임사항, 기타 필요한 사항을 규정함을..제 1조 (목적) 이 약관은 꼬순내 주식회사가 제공하는 꼬순네  서비스 및 제반한 서비스의 이용과 관련하여 회사와 회원과의 권리,의무 및 책임사항, 기타 필요한 사항을 규정함을..",
    subject: "꼬순내 이용약관 동의",
    required: "필수",
  },
  {
    termsId: 2,
    terms:
      "제 1조 (목적) 이 약관은 꼬순내 주식회사가 제공하는 꼬순네  서비스 및 제반한 서비스의 이용과 관련하여 회사와 회원과의 권리,의무 및 책임사항, 기타 필요한 사항을 규정함을..제 1조 (목적) 이 약관은 꼬순내 주식회사가 제공하는 꼬순네  서비스 및 제반한 서비스의 이용과 관련하여 회사와 회원과의 권리,의무 및 책임사항, 기타 필요한 사항을 규정함을..",
    subject: "개인정보 수집 및 이용대한 동의",
    required: "필수",
  },
  {
    termsId: 3,
    terms:
      "제 1조 (목적) 이 약관은 꼬순내 주식회사가 제공하는 꼬순네  서비스 및 제반한 서비스의 이용과 관련하여 회사와 회원과의 권리,의무 및 책임사항, 기타 필요한 사항을 규정함을..제 1조 (목적) 이 약관은 꼬순내 주식회사가 제공하는 꼬순네  서비스 및 제반한 서비스의 이용과 관련하여 회사와 회원과의 권리,의무 및 책임사항, 기타 필요한 사항을 규정함을..",
    subject: "위치정보 이용약관 (필수)",
    required: "필수",
  },
];

const TermsText: React.FC = () => {
  const [agreements, setAgreements] = useState<{ [key: number]: boolean }>({});

  const allAgreed = Object.values(agreements).every(Boolean);

  useEffect(() => {
    setAgreements(
      dummyText.reduce((acc, item) => ({ ...acc, [item.termsId]: false }), {})
    );
  }, []);

  const handleAgreement = (termsId: number | "all") => {
    setAgreements((prev) => {
      const newState =
        termsId === "all"
          ? Object.fromEntries(
              Object.keys(prev).map((key) => [key, !allAgreed])
            )
          : { ...prev, [termsId]: !prev[termsId] };
      return newState;
    });
  };

  return (
    <div className="flex flex-col gap-4">
      <Checkbox
        id="all-terms-agreement"
        text="전체동의"
        checked={allAgreed}
        onChange={() => handleAgreement("all")}
        required={false}
      />
      {dummyText.map((item) => (
        <React.Fragment key={item.termsId}>
          <Checkbox
            id={`${item.termsId}-terms-agreement`}
            text={`${item.subject} (${item.required})`}
            checked={agreements[item.termsId] || false}
            onChange={() => handleAgreement(item.termsId)}
            required={item.required === "필수"}
          />
          <div className="h-24 border border-gray-400 px-2 py-2 overflow-auto mb-4">
            <p className="text-xs text-gray-500">{item.terms}</p>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default TermsText;
