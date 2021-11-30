package com.example.springtemplate.models;

//public enum Level {
//  Junior, Intermediate, Senior, Manager
//}

public enum Level {
  Junior{
    @Override
    public String asLowerCase() {
      return Junior.toString().toLowerCase();
    }
  },
  Intermediate{
    @Override
    public String asLowerCase() {
      return Intermediate.toString().toLowerCase();
    }
  },
  Senior{
    @Override
    public String asLowerCase() {
      return Senior.toString().toLowerCase();
    }
  },
  Manager{
    @Override
    public String asLowerCase() {
      return Manager.toString().toLowerCase();
    }
  };

  public abstract String asLowerCase();
}