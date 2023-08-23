import { useState } from "react";
import { Navbar } from "./components/navbar/Navbar";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { Route, Routes } from "react-router-dom";
import { Swap } from "./pages/Swap";
import { Home } from "./pages/Home";
import { Tokens } from "./pages/Tokens";
import { NFTs } from "./pages/NFTs";
import { Pools } from "./pages/Pools";
import { Vote } from "./pages/Vote";
import { CreateProposal } from "./pages/CreateProposal";
import { VoteDetail } from "./pages/VoteDetail";
import { DetailProject } from "./pages/DetailProject";
import { JobDetails } from "./pages/JobDetails";

function App() {
  return (
    <Routes>
      <Route path="/jobs" element={<Swap />} />
      <Route path="/" element={<Home />} />
      <Route path="/vote" element={<Vote />} />
      <Route path="/vote/create-proposal" element={<CreateProposal />} />
      <Route path="/vote/detail/123456789" element={<VoteDetail />} />
      <Route path="/projects/detail/123456789" element={<DetailProject />} />
      <Route path="/jobs/detail/123456789" element={<JobDetails />} />
      <Route path="/workings" element={<Tokens />} />
      <Route path="/projects" element={<Pools />} />
    </Routes>
  );
}

export default App;
