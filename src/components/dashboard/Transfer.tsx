"use client";

import React, { useState } from "react";
import CustomDropdown from "./CustomDropdown";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import CodeForm from "./CodeForm";

const bankOptions = [
  { value: "travisBank", label: "Travis Bank" },
  { value: "bankOfAmerica", label: "Bank of America Corporation" },
  { value: "wellsFargo", label: "Wells Fargo & Company" },
  { value: "citiGroup", label: "Citigroup Inc" },
  { value: "goldmanSachs", label: "Goldman Sachs Group, Inc" },
  { value: "morganStanley", label: "Morgan Stanley" },
  { value: "usBancorp", label: "U.S. Bancorp" },
  { value: "pncFinancial", label: "PNC Financial Services Group, Inc" },
  { value: "tdBank", label: "TD Bank, N.A" },
  { value: "capitalOne", label: "Capital One Financial Corporation" },
  { value: "hsbcBank", label: "HSBC Bank USA, N.A" },
  { value: "truistFinancial", label: "Truist Financial Corporation" },
  { value: "charlesSchwab", label: "Charles Schwab Corporation" },
  { value: "allyFinancial", label: "Ally Financial Inc" },
  { value: "discoverFinancial", label: "Discover Financial Services" },
  { value: "regionsFinancial", label: "Regions Financial Corporation" },
  { value: "fifthThirdBancorp", label: "Fifth Third Bancorp" },
  { value: "bmoHarrisBank", label: "BMO Harris Bank N.A" },
  { value: "keyCorp", label: "KeyCorp" },
  { value: "citizensFinancial", label: "Citizens Financial Group, Inc" },
];

export default function Transfer() {
  const [selectedBank, setSelectedBank] = useState<{
    value: string;
    label: string;
  } | null>(null);
  // const [selectedBank, setSelectedBank] = useState<string | null>(null);
  const [amount, setAmount] = useState<string>("");
  const [accountNo, setAccountNo] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [issueMsg, setIssueMsg] = useState<boolean>(false);

  const showIssueMsg = () => {
    setLoading(true);
    // Simulate a delay for loading
    setTimeout(() => {
      setLoading(false);
      setIssueMsg(true);
    }, 2000); // 2 seconds delay
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedBank || !amount || !accountNo) {
      setError("Please fill out all fields");
    } else {
      setError("");
      setLoading(true);
      // Simulate a delay for loading
      setTimeout(() => {
        setLoading(false);
        setSuccess(true);
      }, 2000); // 2 seconds delay
    }
  };

  const formatAmount = (amount: string) => {
    const amountNumber = parseFloat(amount);
    if (isNaN(amountNumber)) {
      return amount;
    }
    return amountNumber.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  if (success) {
    return (
      <div className="">
        {issueMsg ? (
          <div className="w-[90%] mx-auto py-[20px]">
            <p className="text-[14px] text-zinc-700">
              Currently, an issue exists that requires your attention. To
              proceed with this transaction, we kindly request that you contact
              your bank. Thank you for your cooperation.
            </p>
          </div>
        ) : (
          <>
            <div className="w-[90%] mx-auto py-[20px]">
              <p className="text-[14px] text-center text-zinc-700">
                You are about to transfer {formatAmount(amount)} to&nbsp;
                <span className="uppercase font-[600]">
                {selectedBank && selectedBank.label}
                </span>
                &nbsp;from your&nbsp;
                <span className="font-[500]">CHECKING ACCOUNT</span><br />
              </p>
            </div>
            <div className="w-[90%] mx-auto">
              <button className="w-full bg-[#117aca] text-white p-[10px]" disabled={loading} onClick={showIssueMsg} >
                {loading ? "Loading..." : "Transfer"}
              </button>
              {/* <CodeForm showIssueMsg={showIssueMsg} loading={loading} setLoading={setLoading}/> */}
            </div>
          </>
        )}
      </div>
    );
  }

  const currentDate = new Date().toLocaleDateString('en-US');

  return (
    <form onSubmit={handleSubmit}>
      <div className="w-[90%] mx-auto py-[10px] border-b">
        {error && (
          <div className="w-[90%] text-center mx-auto text-red-500">
            {error}
          </div>
        )}

        <span className="text-zinc-500 text-[12px]">Wire to</span>
        <div className="relative flex justify-between items-center">
          <CustomDropdown
            options={bankOptions}
            placeholder="Select Bank"
            onSelect={(option) => setSelectedBank(option)}
          />
        </div>
      </div>
      <div className="w-[90%] mx-auto py-[10px] border-b">
        <span className="text-zinc-500 text-[12px]">Wire from</span>
        <div className="relative flex justify-between items-center">
          <span className="text-[14px] text-gray-800 font-[500] uppercase">
            Checking ACCOUNT(...1212)
          </span>
          <MdOutlineKeyboardArrowRight />
        </div>
      </div>
      <div className="w-[90%] mx-auto py-[10px] border-b">
        <span className="text-zinc-500 text-[12px]">Account Number</span>
        <div className="relative flex justify-between items-center">
          <input
            type="number"
            className="w-full outline-none"
            name="amount"
            value={accountNo}
            onChange={(e) => setAccountNo(e.target.value)}
          />
        </div>
      </div>
      <div className="w-[90%] mx-auto py-[10px] border-b">
        <span className="text-zinc-500 text-[12px]">Wire amount</span>
        <div className="relative flex justify-between items-center">
          <span>$</span>
          <input
            type="number"
            className="w-full outline-none"
            name="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
      </div>
      <div className="w-[90%] mx-auto">
        <span className="text-zinc-600 text-[12px]">
          Your daily limit is $250,000.00
        </span>
      </div>
      <div className="w-[90%] mx-auto py-[10px] border-b mb-[20px]">
        <span className="text-zinc-500 text-[12px]">Wire date</span>
        <div className="relative flex justify-between items-center">
          <span className="text-[14px] text-zinc-700">{currentDate}</span>
        </div>
      </div>
      <div className="w-[90%] mx-auto">
        <button
          type="submit"
          className="w-full bg-[#117aca] text-white p-[10px]"
          disabled={loading}
        >
          {loading ? "Loading..." : "Continue"}
        </button>
      </div>
    </form>
  );
}