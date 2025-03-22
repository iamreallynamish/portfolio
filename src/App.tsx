
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import SinglePageLayout from "./components/SinglePageLayout";
import {HashRouter as Router, BrowserRouter, Routes, Route } from "react-router-dom";
import ProjectDetail from "./pages/ProjectDetail";
import BackgroundAnimation from "./components/BackgroundAnimation";
import Projects from "./pages/Projects"; 

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <BrowserRouter>
        <Toaster />
        <Sonner />
        <div className="bg-black text-white min-h-screen font-mono">
          <Routes>
            <Route path="/" element={<SinglePageLayout />} />
            <Route path="/project/:id" element={<ProjectDetail />} />
            <Route path="/projects" element={<Projects></Projects>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
